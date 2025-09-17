"use client";
import React from "react";
import Link from "next/link";
import Heading from "../Common/Heading";

const BusinessEthics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900 text-gray-100 p-[120px]">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-20">
        <ul className="flex w-full justify-between text-base text-gray-400">
          <li>
            <a href="/about/bod" className="hover:text-white transition">
              Board Of Directors
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative pb-2 font-semibold text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400"
            >
              Code of Ethics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Jobs
            </a>
          </li>
        </ul>
      </nav>

      {/* HEADING */}
      <Heading heading="Business" subHeading="Ethics" />

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto">
        {/* Sections */}
        <div className="space-y-10 leading-relaxed text-gray-200">
          <section>
            <p>
              At <span className="font-semibold">Xiorent Technologies</span>, we
              are committed to conducting our business with the highest standards
              of integrity, transparency, and accountability. Our Code of Business
              Ethics serves as a guiding framework for every employee, partner,
              and associate. It reflects our values and ensures that our actions
              are ethical, responsible, and aligned with both the law and our
              principles.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Integrity and Transparency
            </h3>
            <p>
              We conduct business with honesty, fairness, and transparency in all
              our dealings. We do not tolerate any form of fraud, deception, or
              unethical behavior. Our commitment to integrity helps us build and
              maintain trust with our clients, partners, and team members.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Compliance with Laws and Regulations
            </h3>
            <p>
              We comply with all applicable local, national, and international
              laws, including labor laws, data protection regulations,
              intellectual property rights, and industry standards. All employees
              are expected to be aware of and adhere to these legal requirements
              relevant to their roles.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Confidentiality and Data Privacy
            </h3>
            <p>
              We respect the confidentiality of client, employee, and company
              information. All personal and proprietary information must not be
              disclosed and only used for its intended business purpose. We are
              committed to protecting information and maintaining compliance with
              global and local data privacy regulations.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Fair Employment Practices
            </h3>
            <p>
              We are an equal opportunity employer and promote a work culture that
              is inclusive, diverse, and free from discrimination, harassment, or
              retaliation. Every individual is valued and treated with dignity and
              respect, regardless of gender, race, age, disability, or background.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Conflict of Interest
            </h3>
            <p>
              Employees and leaders must avoid situations where personal interests
              conflict with the company’s interests. Any potential conflicts must
              be disclosed to the appropriate authority to ensure transparency and
              protect the integrity of our decisions.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Intellectual Property and Innovation
            </h3>
            <p>
              We are committed to respecting and protecting the intellectual
              property (IP) of others and safeguarding our own innovations. Any
              work developed at Xiorent remains the intellectual property of the
              company unless otherwise agreed.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Responsible Use of Technology
            </h3>
            <p>
              As a tech-driven company, we are committed to building and deploying
              solutions that are ethical, secure, and socially responsible. We
              ensure that our innovations respect human rights, avoid bias, and
              contribute positively to social, business, and digital development
              principles.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              Reporting Violations
            </h3>
            <p>
              We encourage team members to speak up if they witness any unethical
              behavior or policy violations. Reports will be taken seriously and
              handled confidentially and without retaliation.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-purple-300 mb-2">Conclusion</h3>
            <p>
              Our Code of Business Ethics is not just a document—it is a reflection
              of who we are and how we choose to operate. By following these
              standards, Xiorent Technologies continues to establish itself as a
              role model for ethical, responsible, and value-driven conduct in the
              technology industry.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BusinessEthics;
