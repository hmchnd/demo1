// src/hooks/roadmapHooks.js
import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://framsysnode-app-530349298365.asia-south2.run.app/api';

export function useRoadmapTemplates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/roadmap-templates`);
      if (!response.ok) throw new Error('Failed to fetch templates');
      const data = await response.json();
      setTemplates(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTemplate = async (templateData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/roadmap-templates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(templateData),
      });
      if (!response.ok) throw new Error('Failed to create template');
      const newTemplate = await response.json();
      debugger
      setTemplates(prev => [...prev, newTemplate]);
      return newTemplate;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return { templates, loading, error, refetch: fetchTemplates, createTemplate };
}

export function useTemplateAreas(templateId) {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAreas = async () => {
    if (!templateId) return;
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/roadmap-templates/${templateId}/areas`);
      if (!response.ok) throw new Error('Failed to fetch areas');
      const data = await response.json();
      setAreas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createArea = async (areaData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/roadmap-templates/${templateId}/areas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(areaData),
      });
      if (!response.ok) throw new Error('Failed to create area');
      const newArea = await response.json();
      setAreas(prev => [...prev, newArea]);
      return newArea;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchAreas();
  }, [templateId]);

  return { areas, loading, error, refetch: fetchAreas, createArea };
}

export function useTemplatePhases(templateId) {
  const [phases, setPhases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPhases = async () => {
    if (!templateId) return;
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/roadmap-templates/${templateId}/phases`);
      if (!response.ok) throw new Error('Failed to fetch phases');
      const data = await response.json();
      setPhases(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createPhase = async (phaseData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/roadmap-templates/${templateId}/phases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(phaseData),
      });
      if (!response.ok) throw new Error('Failed to create phase');
      const newPhase = await response.json();
      setPhases(prev => [...prev, newPhase]);
      return newPhase;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchPhases();
  }, [templateId]);

  return { phases, loading, error, refetch: fetchPhases, createPhase };
}

export function useTemplateTasks(templateId) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    if (!templateId) return;
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/roadmap-templates/${templateId}/tasks`);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/roadmap-templates/${templateId}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });
      if (!response.ok) throw new Error('Failed to create task');
      const newTask = await response.json();
      setTasks(prev => [...prev, newTask]);
      return newTask;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [templateId]);

  return { tasks, loading, error, refetch: fetchTasks, createTask };
}

// Combined hook that loads everything for a specific template
export function useFullRoadmapData(templateId) {
  const { areas, loading: areasLoading, error: areasError, refetch: refetchAreas } = useTemplateAreas(templateId);
  const { phases, loading: phasesLoading, error: phasesError, refetch: refetchPhases } = useTemplatePhases(templateId);
  const { tasks, loading: tasksLoading, error: tasksError, refetch: refetchTasks } = useTemplateTasks(templateId);

  const loading = areasLoading || phasesLoading || tasksLoading;
  const error = areasError || phasesError || tasksError;

  const refetchAll = () => {
    refetchAreas();
    refetchPhases();
    refetchTasks();
  };

  return {
    areas,
    phases,
    tasks,
    loading,
    error,
    refetchAll,
  };
}