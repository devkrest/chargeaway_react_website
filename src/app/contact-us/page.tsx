import FadeInComponent from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader, MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { JSX, useState } from "react";
import { InputWithLabel } from "./_components/custom-input";
import { TextareaWithLabel } from "./_components/custome-text-area";

function ContactUsPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className=" sm:px-16 px-6 grid lg:grid-cols-2 max-w-screen-2xl mx-auto py-8  lg:py-16">
        <Details />
        <ContactInput />
      </div>
    </div>
  );
}

export default ContactUsPage;

function Details() {
  return (
    <FadeInComponent className=" sm:mt-8 lg:mb-0 mb-8" direction="up">
      <p className="mb-4 font-bold text-primary underline underline-offset-8 decoration-black decoration-[2px]">
        Charging Ahead for a Greener Tomorrow.
      </p>
      <h1 className="font-extrabold sm:text-[40px] text-[35px] leading-[3rem]">
        Contact Us
      </h1>
      <p className="text-base mt-2">
        ChargeAway is a trusted EV charging provider, committed to delivering
        seamless charging experiences with top-notch technology and dependable
        service.
      </p>

      <div className="mt-6 flex flex-wrap gap-5">
        <ContactView
          icon={<MailIcon size={25} />}
          value="contact@chargeaway.com.au"
        />
        <ContactView
          icon={<PhoneCallIcon size={25} />}
          value="+61 0447090909"
        />
        <ContactView
          icon={<MapPin size={25} />}
          value="621 Hawthorn Road, Brighton East 3187"
        />
      </div>
      <div className="mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.910918136923!2d138.56901258704332!3d-34.983896007581855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d01ea7df173d%3A0x7517903528e712fa!2s1026%20South%20Rd%2C%20Edwardstown%20SA%205039%2C%20Australia!5e0!3m2!1sen!2sin!4v1729067472983!5m2!1sen!2sin" height="95%"></iframe>
      </div>
    </FadeInComponent>
  );
}

interface IContactView {
  icon: JSX.Element;
  value: string;
}

function ContactView({ icon, value }: IContactView) {
  return (
    <div className=" flex gap-x-3 items-start">
      {icon}
      <p className="flex-1">{value}</p>
    </div>
  );
}

function ContactInput() {
  const [data, setData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = e.target.name as keyof typeof data;
    const t = data;
    t[n] = e.target.value;
    console.log(e.target.name);
    setData({ ...t });
  };

  const handleMessageData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const n = e.target.name as keyof typeof data;
    const t = data;
    t[n] = e.target.value;
    setData({ ...t });
  };
  const { toast } = useToast();
  async function sendPaymentConfirmation() {
    if (!data.name) {
      toast({
        title: "Name",
        description: "Please enter your good name",
        duration: 1000,
      });
    } else if (!data.companyName) {
      toast({
        title: "Company Name",
        description: "Please enter company name",
        duration: 1000,
      });
    } else if (!data.email) {
      toast({
        title: "Email",
        description: "Please enter email",
        duration: 1000,
      });
    } else if (!data.companyName) {
      toast({
        title: "Phone no.",
        description: "Please enter phone number",
        duration: 1000,
      });
    } else if (!data.companyName) {
      toast({
        title: "Message",
        description: "Please enter message",
        duration: 1000,
      });
    } else {
      setIsLoading(true);
      const send = {
        sender: {
          name: data.name,
          email: "no-reply@hbcsugur.in",
        },
        to: [
          {
            email: "contact@chargeaway.com.au",
            name: data.name,
          },
        ],
        subject: `Inquiry-${data.companyName}`,
        htmlContent: `
        <html>
          <head></head>
          <body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
            <div style='max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);'>
              <h2 style='text-align: center; color: #333;'>New Inquiry</h2>
              <hr style='border-top: 2px solid #ccc; margin-bottom: 20px;'>
              <p><span style='font-weight:bold'>Name</span> - ${data.name}</p>
              <p><span style='font-weight:bold'>Company name</span> - ${data.companyName}</p>
              <p><span style='font-weight:bold'>Phone</span> - ${data.phone}</p>
              <p><span style='font-weight:bold'>Email</span> - ${data.email}</p>
              <p><span style='font-weight:bold'>Message</span> -  ${data.description}</p>
              
            </div>
          </body>
        </html>`,
      };

      setTimeout(() => {
        setData({
          companyName: "",
          description: "",
          email: "",
          name: "",
          phone: "",
        });
        toast({
          title: "Thank you",
          description: "Your message has been sent.",
          duration: 1000,
        });
        setIsLoading(false);
      }, 1000);
    }
  }

  return (
    <FadeInComponent
      direction="left"
      className="flex flex-col gap-y-4 lg:ml-auto "
    >
      <InputWithLabel
        index={1}
        handleOnChangeValue={handleData}
        htmlFor="name"
        label="Name"
        placeholder="Your good name"
        type="text"
        value={data.name}
      />
      <InputWithLabel
        index={2}
        handleOnChangeValue={handleData}
        htmlFor="companyName"
        label="Company Name"
        placeholder="Enter your company name"
        type="text"
        value={data.companyName}
      />
      <InputWithLabel
        index={3}
        handleOnChangeValue={handleData}
        htmlFor="email"
        label="Email"
        placeholder="Enter email address"
        type="email"
        value={data.email}
      />
      <InputWithLabel
        index={4}
        handleOnChangeValue={handleData}
        htmlFor="phone"
        label="Phone no."
        placeholder="Enter phone no."
        type="tel"
        value={data.phone}
      />
      <TextareaWithLabel
        handleOnChangeValue={handleMessageData}
        htmlFor="description"
        label="Message"
        placeholder="Enter message"
        value={data.description}
      />
      <Button
        onClick={sendPaymentConfirmation}
        className="w-full  sm:w-[30rem]"
      >
        {isLoading ? <Loader className="animate-spin" /> : "Submit"}
      </Button>
    </FadeInComponent>
  );
}
