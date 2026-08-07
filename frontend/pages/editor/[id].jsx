import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const API_BASE = 'http://localhost:5000/api';

export default function Editor() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [generations, setGenerations] = useState([]);

  useEffect(() => {
    if (id) fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`${API_BASE}/projects/${id}`);
      setProject(response.data);
      setGenerations(response.data.generations || []);
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  };

  const generateCode = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post(`${API_BASE}/generate`, {
        projectId: id,
        prompt
      }, {
        headers: { 'user-id': userId }
      });
      setGeneratedCode(response.data.generatedCode);
      setGenerations([response.data, ...generations]);
      setPrompt('');
    } catch (error) {
      console.error('Error generating code:', error);
      alert('Error: ' + error.response?.data?.error || error.message);
    }
    setLoading(false);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>{project.name}</h1>
        <p>Type: {project.gameType} | Version: {project.version}</p>
      </header>

      <div style={styles.editorLayout}>
        <div style={styles.promptSection}>
          <h2>Describe Your Feature</h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Create a shop system with buyable items and currency"
            style={styles.textarea}
          />
          <button 
            onClick={generateCode} 
            disabled={loading}
            style={styles.generateButton}
          >
            {loading ? '⏳ Generating...' : '🤖 Generate Code'}
          </button>
        </div>

        <div style={styles.codeSection}>
          <h2>Generated Code</h2>
          {generatedCode ? (
            <pre style={styles.codeBlock}>
              <code>{generatedCode}</code>
            </pre>
          ) : (
            <p style={styles.placeholder}>Generate code to see it here...</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', maxWidth: '1400px', margin: '0 auto' },
  header: { marginBottom: '30px', borderBottom: '2px solid #667eea', paddingBottom: '10px' },
  editorLayout: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  promptSection: { background: '#f9f9f9', padding: '20px', borderRadius: '8px' },
  textarea: { width: '100%', height: '150px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '14px', marginBottom: '10px' },
  generateButton: { width: '100%', background: '#667eea', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' },
  codeSection: { background: '#1e1e1e', color: '#d4d4d4', padding: '20px', borderRadius: '8px' },
  codeBlock: { background: '#2d2d2d', padding: '15px', borderRadius: '5px', overflowX: 'auto', fontSize: '13px', lineHeight: '1.5' },
  placeholder: { color: '#666', textAlign: 'center', padding: '40px 20px' }
};