import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
})

export const getAllPatients = async () => await api.get(`/patients/`)
export const postPatient = async (patient_data) => await api.post(`/patients/`, patient_data)
export const patchPatient = async (patient_id, patient_data) => await api.patch(`/patients/${patient_id}/`, patient_data)

export const getExaminationByPatient = async (patient_id) => await api.get(`/examinations/${patient_id}/by-patient/`)
export const postExamination = async (examination_data) => await api.post(`/examinations/`, examination_data)