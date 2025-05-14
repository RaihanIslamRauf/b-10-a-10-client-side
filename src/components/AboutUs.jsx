import UseTitle from "../hooks/UseTitle";


const AboutUs = () => {
  UseTitle();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#FF5103] mb-6">About Us</h1>
      <div className="max-w-4xl mx-auto text-lg text-gray-800 dark:text-white">
        <p className="mb-6">
          <strong>CrowdCube</strong> is a revolutionary platform that aims to connect
          individuals and organizations in their pursuit of causes that make a real
          difference in the world. Our mission is to help people invest in and support
          meaningful campaigns that are built on transparency, collaboration, and shared
          goals. We believe that by joining forces, we can collectively work towards
          creating a better world for everyone.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">Our Vision</h2>
        <p className="mb-6">
          At CrowdCube, our vision is to empower individuals and organizations to take
          charge of their impact on society. We aim to create a global network of changemakers
          who are passionate about supporting causes, whether it be for charitable donations,
          community projects, or environmental sustainability. By leveraging technology,
          we ensure that everyone has access to the tools they need to contribute to causes they
          believe in.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">What We Do</h2>
        <p className="mb-6">
          We offer a user-friendly platform that allows you to browse and contribute to a wide
          range of campaigns across different sectors. Whether it's funding for a local startup
          or donating to a global cause, CrowdCube provides you with the opportunity to be a part
          of something bigger. We provide transparent, secure, and easy-to-use tools for people
          to manage their contributions and track the success of the campaigns they support.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">Join Us</h2>
        <p>
          Become a part of our ever-growing community of supporters. Sign up today to get started
          with browsing campaigns, donating to your favorite causes, and making a real difference
          in the world. Together, we can build a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
