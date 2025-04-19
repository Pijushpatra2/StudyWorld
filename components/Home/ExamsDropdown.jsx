
"use client"

import { motion } from "framer-motion"

const ExamsDropdown = ({ isOpen }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-10 left-0 w-[1000px] bg-white shadow-lg rounded-md py-6 z-50 p-6 grid grid-cols-4 gap-6 text-sm"
    >
      {/* PG Medical Entrance */}
      <div>
        <h3 className="font-semibold text-base mb-2">PG Medical Entrance</h3>
        <ul className="space-y-1">
          <li>NEET PG</li>
          <li>NEET MDS</li>
          <li>NBE DNB PDCET</li>
        </ul>
      </div>

      {/* UG Medical Entrance */}
      <div>
        <h3 className="font-semibold text-base mb-2">UG Medical Entrance</h3>
        <ul className="space-y-1">
          <li>NEET UG</li>
          <li>AIIMS</li>
          <li>JIPMER</li>
          <li>Banaras Hindu University: Pre-Medical Test (BHU PMT)</li>
        </ul>
      </div>

      {/* Other Medical Exams */}
      <div>
        <h3 className="font-semibold text-base mb-2">Other Medical Exams</h3>
        <ul className="space-y-1">
          <li>NVS Staff Nurse</li>
          <li>MET B.Sc. Nursing</li>
          <li>ESIC Nursing Officer</li>
          <li>Bihar Paramedical</li>
          <li>RMLIMS Nursing Officer</li>
          <li>UPPSC Staff Nurse</li>
          <li>ESIC Paramedical</li>
          <li>GMCH Nursing Officer</li>
          <li>IGNOU B.Sc Nursing</li>
          <li>JIPMER Nursing Officer</li>
          <li>PGIMER B.Sc Nursing</li>
          <li>Haryana SSC Staff Nurse</li>
          <li>MPPEB Group 5 Lab Technician</li>
          <li>ICMR JRF</li>
          <li>MPPEB Group 5 Staff Nurse</li>
          <li>Baba Farid Univ. Staff Nurse</li>
          <li>Rajasthan RPVT</li>
          <li>NICED Personal Assistant</li>
          <li>RRB Health & Malaria Inspector</li>
          <li>RRB Lab Assistant</li>
          <li>AIIMS - Nagpur Nursing Officer</li>
          <li>AIIMS Bhopal</li>
          <li>Western Coal Field Ltd. (Staff Nurse)</li>
          <li>VMMC & Safdarjung Hospital SR</li>
          <li>IMAT (Intl Medical Admissions Test)</li>
          <li>RRB Staff Nurse</li>
          <li>MCAT</li>
          <li>USMLE</li>
        </ul>
      </div>

      {/* You can reserve this column for future filtering or highlights */}
      <div>
        <h3 className="font-semibold text-base mb-2">Medical Clerical Exams</h3>
        <ul className="space-y-1">
          <li>Will update here if needed</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default ExamsDropdown
