import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
})

export const getAllPatients = async () => await api.get(`/patients/`)
export const postPatient = async (patient) => await api.post(`/patients/`, patient)

export const getExaminationByPatient = async (id) => await api.get(`/examinations/${id}/by-patient/`)