import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

function TeamMember({
  name,
  title,
  imageUrl,
}: {
  name: string;
  title: string;
  imageUrl: string;
}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 text-gray-300">
      <div className="flex flex-col">
        {/* Avatar */}
        <a href="#" className="mx-auto">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={imageUrl}
            alt={name}
          />
        </a>

        {/* Details */}
        <div className="text-center mt-6">
          {/* Name */}
          <h1 className="text-gray-100 text-xl font-bold mb-1">{name}</h1>

          {/* Title */}
          <div className="text-gray-300 font-light mb-2">{title}</div>

          {/* Social Icons */}
          <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            {/* Linkedin */}
            <a
              href="#"
              className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
            >
              <FaLinkedin className="mdi mdi-linkedin text-indigo-300 mx-auto mt-2" />
              <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="flex rounded-full hover:bg-blue-50 h-10 w-10"
            >
              <FaTwitter className="mdi mdi-twitter text-blue-400 mx-auto mt-2" />
              <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex rounded-full hover:bg-orange-50 h-10 w-10"
            >
              <FaInstagram className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
              <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="flex flex-col mt-8 text-gray-300">
      {/* Meet the Team */}
      <div className="container max-w-7xl px-4">
        {/* Section Header */}
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            {/* Header */}
            <h1 className="text-gray-300 text-4xl font-bold mb-8">
              Meet the Team
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg font-light">
              With over 100 years of combined experience, we've got a
              well-seasoned team at the helm.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap">
          {/* Member #1 */}
          <TeamMember
            name="Tranter Jaskulski"
            title="Founder & Specialist"
            imageUrl="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
          />

          {/* Member #2 */}
          <TeamMember
            name="Denice Jagna"
            title="Tired & M. Specialist"
            imageUrl="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
          />

          {/* Member #3 */}
          <TeamMember
            name="Kenji Milton"
            title="Team Member"
            imageUrl="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
          />

          {/* Member #4 */}
          <TeamMember
            name="Doesn't matter"
            title="Will be fired"
            imageUrl="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
