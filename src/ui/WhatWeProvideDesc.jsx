import Button from "./Button";

const WhatWeProvideDesc = () => {
  return (
    <div className="">
      <h2>Authentication</h2>
      <span className="gradientParagraph inline-block my-3">
        Secure and Easy-to-Use Authentication for Your SaaS Website and API
      </span>
      <p className="text-white my-4">
        Our authentication system is built on top of the industry-leading PaaS
        such as Supabase and Firebase. It is secure, easy-to-use, and fully
        customizable. It supports email/password, social logins, and more.
      </p>
      <Button
        className="text-white button-transparent rounded-full"
        withArrow={true}
      >
        <span>get started</span>
      </Button>
    </div>
  );
};

export default WhatWeProvideDesc;
