"use client";

import { useState } from "react";

import { Button } from "@components/ui/button";
import { FadeUp } from "@components/ui/fade-up";
import { Input } from "@components/ui/input";
import { Vstack } from "@components/ui/stacks";

interface WaitlistFormState {
  name: string;
  company: string;
  location: string;
  phone: string;
}

const INITIAL_STATE: WaitlistFormState = {
  name: "",
  company: "",
  location: "",
  phone: "",
};

export function WaitlistFormSection(): React.JSX.Element {
  const [form, setForm] = useState<WaitlistFormState>(INITIAL_STATE);

  const handleChange = (field: keyof WaitlistFormState) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <section id="waitlist" className="relative bg-[#F2F2F2] py-16 md:py-24 px-5.25 md:px-11.5 overflow-hidden">
      {/* <Image
        src="/images/white-lines-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      /> */}
      <div className="relative z-10 max-w-282.25 mx-auto">
        <FadeUp>
          <div className="bg-black rounded-3xl px-6 sm:px-12 py-10 sm:py-14">
            <h2 className="font-extrabold max-w-175.5 mx-auto text-xl sm:text-2xl md:text-[35px] text-white text-center leading-tight mb-8 sm:mb-10">
              Be Among the First to Access Hippo Intelligence
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Name" placeholder="John Doe" value={form.name} onChange={handleChange("name")} />
                <FormField
                  label="Company"
                  placeholder="Chidi and sons LTD"
                  value={form.company}
                  onChange={handleChange("company")}
                />
                <FormField
                  label="Location"
                  placeholder="Lagos, Nigeria"
                  value={form.location}
                  onChange={handleChange("location")}
                />
                <FormField
                  label="Phone Number"
                  placeholder="+234...."
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
              </div>

              <Button
                type="submit"
                className="max-w-152 mt-4 inline-flex items-center justify-center bg-[#FF621F] text-white font-semibold text-sm sm:text-base px-10 py-6! rounded-full hover:bg-[#FF621F]/90 transition-colors w-full sm:w-auto sm:self-center"
              >
                Secure My Spot
              </Button>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({ label, placeholder, value, type = "text", onChange }: FormFieldProps): React.JSX.Element => {
  return (
    <Vstack className="gap-2">
      <label className="text-white text-sm font-bold">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 bg-white text-black rounded-md px-4 border-0"
      />
    </Vstack>
  );
};
