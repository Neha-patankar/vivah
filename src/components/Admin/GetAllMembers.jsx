import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllMembers = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5555/api/registrations");
      setData(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/api/registrations/${id}`);
      fetchData();
      alert("Are you Sure Member deleted successfully.");
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", updatedData.name);
      formData.append("email", updatedData.email);
      formData.append("phone", updatedData.phone);
      formData.append("gender", updatedData.gender);
      formData.append("address", updatedData.address);
      if (updatedData.image) {
        formData.append("image", updatedData.image);
      }

      await axios.put(
        `http://localhost:5555/api/registrations/${editData._id}`,
        formData
      );
      setEditData(null);
      fetchData();
      alert("Member updated successfully.");
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5555/api/registrations/status/${id}`, {
        status: newStatus,
      });
      fetchData();
      alert(`Status changed to ${newStatus.toUpperCase()}`);
    } catch (error) {
      console.error("Status Change Error:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">All Registrations</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.no</th>
            <th className="border p-2">Member code</th>
           <th className="border p-2">Image</th>
           <th className="border p-2">Personalimage </th>
            <th className="border p-2">Name</th>
            {/* <th className="border p-2">Email</th> */}
            <th className="border p-2">Samaj</th>
            <th className="border p-2">Gotra</th>
            <th className="border p-2">Login no</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Vivah Code</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2 text-center">{item.matCode}</td>
              <td className="border p-2 text-center">
                {item.image && (
                  <img
                    src={`http://localhost:5555/uploads/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                )}
              </td>
                   <td className="border p-2 text-center">
                {item.personalimage && (
                  <img
                    src={`http://localhost:5555/uploads/${item.personalimage }`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                )}
              </td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.samajName}</td>
              <td className="border p-2">{item.gotraName}</td>
              {/* <td className="border p-2">{item.email}</td> */}
              <td className="border p-2">{item.phone}</td>
              <td className="border p-2">{item.gender}</td>
              <td className="border p-2">{item.currentCity}</td>
              <td className="border p-2">
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="notactive">Not Active</option>
                  <option value="active">Active</option>
                </select>
              </td>
              <td className="border p-2">{item.vmtCode || "-"}</td>
              <td className="border p-2 space-x-1">
                <button
                  onClick={() => setViewData(item)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => {
                    setEditData(item);
                    setUpdatedData(item);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-[400px] space-y-4">
            <h3 className="text-xl font-bold text-center">
              Update Registration
            </h3>
            <input
              type="text"
              value={updatedData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Name"
            />
            <input
              type="email"
              value={updatedData.email}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, email: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Email"
            />
            <input
              type="text"
              value={updatedData.phone}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, phone: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Phone"
            />
            <input
              type="text"
              value={updatedData.gender}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, gender: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Gender"
            />
            <input
              type="text"
              value={updatedData.address}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, address: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Address"
            />
            <input
              type="file"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, image: e.target.files[0] })
              }
              className="w-full border p-2 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditData(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md space-y-3 w-[400px] text-center">
            <img
              src={`http://localhost:5555/uploads/${viewData.image}`}
              alt={viewData.name}
              className="w-24 h-24 object-cover rounded-full mx-auto border mb-4"
            />
            <input
              type="text"
              value={viewData.name}
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
            <input
              type="email"
              value={viewData.email}
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
            <input
              type="text"
              value={viewData.phone}
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
            <input
              type="text"
              value={viewData.gender}
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
            <input
              type="text"
              value={viewData.address}
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded w-full mt-2"
              onClick={() => setViewData(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllMembers;
