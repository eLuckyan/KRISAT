const HeaderData = () => {
    const mainNav = {
        "About Us": ["History", "About KRISAT", "Misson & Vision", "Board Members", "Governing Council", "From Principal Desk"],
        "Farming": ["Animal Husbandry", "Organic Field", "Wet Land", "Orchard", "Garden Land", "Dry Land"],
        "Academics": ["Courses Offered", "Faculty", "Academic Calendar", "Class Timetable", "College Library", "Instructional Exam"],
        "Academic Activities": ["NSS Programs", "Crop Production", "Short Tour", "Outdoor Visit", "Field Classes", "All India Study Tour"],
        "Life @ KRISAT": ["Hostel", "Sports Activities", "Culturals", "Grievance", "Infrastructure"],
        "Facilities": ["College View", "Insfrastructure", "Laboratory", "Observatory", "MI room", "Smart Class", "Exam Hall", "Cafeteria", "Gym", "Mess"],
        "Nursery": ["Indoor Planting", "Outdoor Planting", "Crotons", "Flower Plants", "Hanging & Creeper"],
        "Rules & Regulations": ["Academic Rules", "College Rules", "Hostel Rules"]
    };

    const navItems = ["Home", "About", "Contact"];

    return {
        mainNav, navItems
    }
}

export default HeaderData