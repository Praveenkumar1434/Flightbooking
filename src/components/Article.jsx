import { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const Article = () => {
    const [showPassengerForm, setShowPassengerForm] = useState(false);
    const [passengers, setPassengers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        travelClass: "",
        specialMeal: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const randomFlights = ["IndiGo"];
    const randomTimes = ["06:30 AM", "09:15 AM", "01:45 PM", "07:00 PM"];

    const handleSearchClick = () => {
        setShowPassengerForm((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        if (!formData.name || !formData.age || !formData.gender || !formData.travelClass || !formData.specialMeal) {
            alert("Please fill in all fields!");
            return;
        }
        const newPassenger = {
            ...formData,
            flight: randomFlights[Math.floor(Math.random() * randomFlights.length)],
            time: randomTimes[Math.floor(Math.random() * randomTimes.length)],
        };
        setPassengers((prev) => [...prev, newPassenger]);
        setFormData({ name: "", age: "", gender: "", travelClass: "", specialMeal: "" });
    };

    const handleEdit = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setFormData(passengers[index]);
        setShowPassengerForm(true);
    };

    const handleUpdate = () => {
        if (!formData.name || !formData.age || !formData.gender || !formData.travelClass || !formData.specialMeal) {
            alert("Please fill in all fields!");
            return;
        }
        const updatedPassengers = [...passengers];
        updatedPassengers[editIndex] = formData;
        setPassengers(updatedPassengers);
        setFormData({ name: "", age: "", gender: "", travelClass: "", specialMeal: "" });
        setIsEditing(false);
        setEditIndex(null);
    };

    const handleDelete = (index) => {
        setPassengers((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-6xl mx-auto mt-2">
            {/* Tabs */}
            <div className="flex flex-wrap border-b bg-white">
                <button className="flex items-center gap-2 px-4 py-2 text-blue-800 font-semibold border-b-2 border-blue-800">
                    <FaPlaneDeparture /> Book a flight
                </button>
                <button className="px-4 py-2 text-gray-600">Book a hotel</button>
            </div>

            {/* Trip Type */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm bg-white">
                <label><input type="radio" name="trip" defaultChecked /> One Way</label>
                <label><input type="radio" name="trip" /> Round Trip</label>
                <label><input type="radio" name="trip" /> Multi City</label>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 bg-white">
                <div>
                    <label htmlFor="from" className="block text-sm font-medium">From</label>
                    <select id="from" name="from" className="w-full border rounded px-2 py-1">
                        <option value="">Select departure</option>
                        <option value="DEL">Delhi</option>
                        <option value="BOM">Mumbai</option>
                        <option value="BLR">Bengaluru</option>
                        <option value="MAA">Chennai</option>
                        <option value="">Abu Dhabi</option>
                        <option value="">Jammu</option>
                        <option value="">Hyderabad</option>
                        <option value="">London</option>
                        <option value="">Hongkong</option>
                        <option value="">Switchzerland</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="to" className="block text-sm font-medium">To</label>
                    <select id="to" name="to" className="w-full border rounded px-2 py-1">
                        <option value="">Select destination</option>
                        <option value="DEL">Delhi</option>
                        <option value="BOM">Mumbai</option>
                        <option value="BLR">Bengaluru</option>
                        <option value="MAA">Chennai</option>
                        <option value="">Abu Dhabi</option>
                        <option value="">Jammu</option>
                        <option value="">Hyderabad</option>
                        <option value="">London</option>
                        <option value="">Hongkong</option>
                        <option value="">Switchzerland</option>
                    </select>
                </div>

                <div>
                    <p className="text-xs font-semibold">Departure</p>
                    <input type="date" className="border rounded px-2 py-1 w-full" />
                    <p className="text-xs text-gray-500">Monday</p>
                </div>

                <div>
                    <p className="text-xs font-semibold">Return</p>
                    <p className="text-xs text-green-700">Save more and enjoy discounts!</p>
                </div>

                <div>
                    <p className="text-xs font-semibold">Travellers</p>
                    <select className="border rounded px-2 py-1 w-full">
                        <option>1 Passenger</option>
                        <option>2 Passengers</option>
                        <option>Family</option>
                    </select>
                </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-between mt-4">
                <div className="flex flex-wrap gap-4 justify-between items-center mt-4 bg-white">
                    <select className="border rounded px-2 py-1 bg-white">
                        <option>Cash</option>
                        <option>Card</option>
                    </select>
                </div>
                <button
                    onClick={handleSearchClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                >
                    Search
                </button>
            </div>

            {/* Passenger Form */}
            {showPassengerForm && (
                <div className="mt-6 bg-gray-100 p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Passenger Details</h2>
                    <form>
                        <div className="mb-2">
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                placeholder="Enter passenger name"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                placeholder="Enter passenger age"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            >
                                <option value="">Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium">Class</label>
                            <select
                                name="travelClass"
                                value={formData.travelClass}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            >
                                <option value="">Select</option>
                                <option>Economy</option>
                                <option>Business class</option>
                                <option>First Class</option>
                                <option>Premium Economy</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium">Special Meals</label>
                            <select
                                name="specialMeal"
                                value={formData.specialMeal}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Vegetarian Meal">Vegetarian Meal</option>
                                <option value="Vegan Meal">Vegan Meal</option>
                                <option value="Gluten-Free Meal">Gluten-Free Meal</option>
                                <option value="Halal Meal">Halal Meal</option>
                                <option value="Kosher Meal">Kosher Meal</option>
                                <option value="Low-Calorie Meal">Low-Calorie Meal</option>
                                <option value="Low-Fat Meal">Low-Fat Meal</option>
                                <option value="Low-Sodium Meal">Low-Sodium Meal</option>
                                <option value="Diabetic Meal">Diabetic Meal</option>
                                <option value="Seafood Meal">Seafood Meal</option>
                                <option value="Fruit Platter">Fruit Platter</option>
                                <option value="Raw Vegetarian Meal">Raw Vegetarian Meal</option>
                                <option value="Child Meal">Child Meal</option>
                                <option value="Bland Meal">Bland Meal</option>
                                <option value="Asian Vegetarian Meal">Asian Vegetarian Meal</option>
                            </select>
                        </div>
                    </form>
                    <div className="flex gap-2 mt-3">
                        {isEditing ? (
                            <button
                                onClick={handleUpdate}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                onClick={handleAdd}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Add
                            </button>
                        )}
                        <button
                            onClick={() => {
                                setFormData({ name: "", age: "", gender: "", travelClass: "", specialMeal: "" });
                                setIsEditing(false);
                                setEditIndex(null);
                            }}
                            className="bg-yellow-500 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            )}

            {/* Responsive Table */}
            {passengers.length > 0 && (
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Age</th>
                                <th className="border p-2">Gender</th>
                                <th className="border p-2">Class</th>
                                <th className="border p-2">Special Meal</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passengers.map((p, i) => (
                                <tr key={i}>
                                    <td className="border p-2">{p.name}</td>
                                    <td className="border p-2">{p.age}</td>
                                    <td className="border p-2">{p.gender}</td>
                                    <td className="border p-2">{p.travelClass}</td>
                                    <td className="border p-2">{p.specialMeal}</td>
                                    <td className="border p-2 flex gap-2">
                                        <button
                                            onClick={() => handleEdit(i)}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(i)}
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Article;
