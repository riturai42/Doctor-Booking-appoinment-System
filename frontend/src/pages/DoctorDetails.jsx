import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <div className="bg-white shadow-lg rounded-xl p-8">

        <div className="text-8xl text-center">
          👨‍⚕️
        </div>

        <h1 className="text-3xl font-bold text-center mt-5">
          Doctor Details
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Doctor ID: {id}
        </p>

        <button className="block mx-auto bg-blue-600 text-white px-8 py-3 rounded-lg mt-8">
          Book Appointment
        </button>

      </div>

    </div>
  );
};

export default DoctorDetails;