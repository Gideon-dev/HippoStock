"use client";

import { useState } from "react";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

interface AgentStep {
  number: string;
  title: string;
  description: string;
}

const AGENT_STEPS: AgentStep[] = [
  {
    number: "01",
    title: "Post Tenders",
    description: "Source importation deals from your network and post them on the Hippo platform. We handle the logistics end.",
  },
  {
    number: "02",
    title: "Earn 7-15% commissions",
    description: "Your commission rate is tied to deal size and category. Higher volume deals unlock the top tier automatically.",
  },
  {
    number: "03",
    title: "Friday Payouts",
    description: "Every confirmed deal settles on the following Friday. Bank transfers, no delays, no excuses.",
  },
];

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi",
  "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
] as const;

const CATEGORIES = [
  "Medical Consumables",
  "Pharmaceuticals",
  "Night Economy",
  "General Trade",
  "Wall Sockets & Electrical",
] as const;

interface FormState {
  fullName: string;
  state: string;
  phone: string;
  category: string;
}

export function HowItWorksSection(): React.JSX.Element {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    state: "",
    phone: "",
    category: "",
  });

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <section id="agent" className="bg-cream py-20 px-5.25 md:px-11.5 ">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6  items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9.5 h-9.5 rounded-full bg-primary-blue inline-block" />
            <span className="text-black text-[35px] font-normal">How It works</span>
          </div>

          <h2 className="text-[40px] md:text-[55px] font-bold text-black mb-10 leading-tight md:max-w-83.5 w-full">
            Become an <span className="text-primary-blue">Hippo Agent</span>
          </h2>

          <div className="grid grid-cols-2 gap-5">
            {AGENT_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-6.75 w-full">
                <span className="text-white text-[40px] md:text-[50px] font-semibold text-center flex items-center justify-center leading-none shrink-0 w-25.5 h-25.5 rounded-full bg-primary-blue">
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-base md:text-[25px] text-black mb-1 shrink-0">{step.title}</h3>
                  <p className="text-black text-base leading-relaxed mt-7.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center"> 
          <div className="bg-[#DFDFDF] rounded-2xl p-4 sm:p-8 shadow-sm max-w-xl w-full ">
            <h3 className="font-semibold text-[38px] text-black text-center mb-6">Join as agent</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white px-4 sm:px-8 rounded-[10px] py-11 max-w-133.75 w-full mx-auto">
              <Input
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                className="min-h-14.5 rounded-full bg-gray-100 border-0 px-5 text-sm"
              />

              <Select
                value={form.state}
                onValueChange={(value: string | null) => setForm((prev) => ({ ...prev, state: value ?? "" }))}
              >
                <SelectTrigger className="min-h-14.5 w-full rounded-full bg-gray-100 border-0 px-5 text-sm data-placeholder:text-muted-foreground">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                className="min-h-14.5 rounded-full bg-gray-100 border-0 px-5 text-sm"
              />

              <Select
                value={form.category}
                onValueChange={(value: string | null) => setForm((prev) => ({ ...prev, category: value ?? "" }))}
              >
                <SelectTrigger className="min-h-14.5 w-full rounded-full bg-gray-100 border-0 px-5 text-sm data-placeholder:text-muted-foreground">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button type="submit" variant="default" className="w-full animate-border-pulse h-12 rounded-full mt-2 text-base font-semibold xl:text-[25px]">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
