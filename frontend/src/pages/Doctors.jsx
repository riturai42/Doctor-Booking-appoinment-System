import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    speciality: "Cardiologist",
    experience: "10 Years",
  },
  {
    id: 2,
    name: "Dr. Priya Singh",
    speciality: "Dermatologist",
    experience: "8 Years",
  },
  {
    id: 3,
    name: "Dr. Amit Kumar",
    speciality: "General Physician",
    experience: "12 Years",
  },
];

const Doctors = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Doctors
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <div className="h-48 bg-blue-100 rounded-xl flex items-center justify-center text-7xl">
              👨‍⚕️
            </div>

            <h2 className="text-2xl font-bold mt-5">
              {doctor.name}
            </h2>

            <p className="text-blue-600 mt-2">
              {doctor.speciality}
            </p>

            <p className="text-gray-600 mt-2">
              Experience: {doctor.experience}
            </p>

            <Link
              to={`/doctor-details/${doctor.id}`}
              className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5"
            >
              View Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Doctors;