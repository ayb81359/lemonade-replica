import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const API_BASE = 'http://localhost:5000/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '', gameType: 'custom' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`${API_BASE}/projects`, {
        headers: { 'user-id': userId }
      });
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const createProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post(`${API_BASE}/projects`, formData, {
        headers: { 'user-id': userId }
      });
      setProjects([...projects, response.data]);
      setFormData({ name: '', description: '', gameType: 'custom' });
      setShowForm(false);
    } catch (error) {
      console.error('Error creating project:', error);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1>Your Projects</h1>
      
      {!showForm ? (
        <button onClick={() => setShowForm(true)} style={styles.button}>
          + New Project
        </button>
      ) : (
        <form onSubmit={createProject} style={styles.form}>
          <input
            type="text"
            placeholder="Project Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            style={styles.input}
          />
          <select
            value={formData.gameType}
            onChange={(e) => setFormData({...formData, gameType: e.target.value})}
            style={styles.input}
          >
            <option value="custom">Custom</option>
            <option value="simulator">Simulator</option>
            <option value="tycoon">Tycoon</option>
            <option value="obby">Obby</option>
            <option value="pet-game">Pet Game</option>
          </select>
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Creating...' : 'Create Project'}
          </button>
        </form>
      )}

      <div style={styles.projectsGrid}>
        {projects.map(project => (
          <Link key={project._id} href={`/editor/${project._id}`}>
            <div style={styles.projectCard}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <small>Type: {project.gameType}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', maxWidth: '1200px', margin: '0 auto' },
  button: { background: '#667eea', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' },
  form: { background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' },
  input: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '14px' },
  projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' },
  projectCard: { background: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', cursor: 'pointer' }
};