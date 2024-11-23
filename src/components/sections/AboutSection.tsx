const AboutSection = () => (
  <section className="container py-16 bg-white/50 rounded-3xl my-16">
    <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
    <div className="max-w-3xl mx-auto">
      <p className="text-lg text-gray-600 mb-8">
        Student and freelancer with a responsible approach, experienced in programming and graphics.
        I have strong analytical thinking, excellent communication skills, and a desire to constantly learn.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
              <div>
                <h4 className="font-medium">Freelance Developer</h4>
                <p className="text-gray-600">2020 - Present</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
              <div>
                <h4 className="font-medium">IT Consultant</h4>
                <p className="text-gray-600">2019 - Present</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
              <div>
                <h4 className="font-medium">Computer Science</h4>
                <p className="text-gray-600">2018 - 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;