"use client";
import React from "react";
import Heading from "../Common/Heading";
export default function LeadingTeam() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900">
            {/* First component: You can add any content here */}
            <div className="text-center pt-4">
            <Heading heading="Leading" subHeading="Team" />
            </div>
            {/* Second component: Centered image */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src="/Our Leadership Team.png"
                    alt="Centered"
                    style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "-10rem" }}
                />
            </div>
        </div>
    );
}