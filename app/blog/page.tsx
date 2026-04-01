"use client"

import { useState } from "react";

// This is where you will write your blog posts!
const blogPosts = [
  {
    id: 1,
    title: "Personifying LLMs: An Analysis of Reliability",
    date: "March 06, 2026",
    summary: "Personifying LLMs is a strong tool currently being explored by many in the field, but is it perhaps too strong of a tool? In this post, I reflect on my experiences with personification and its reflect on LLM output.",
    content: (
      <>
        <p className="mb-4">
          The realization that LLMs (Large Language Models) perform completely differently given different personas has several real-world implications. For one, it supports the claim that LLMs do not give a correct answer; they give the right answers in the context of the user’s prompt. Its behavior and output are purely based on what it believes the user is looking for, and prioritizing that over providing a logically sound answer brings up a question of reliability.
        </p>
        <p className="mb-4">
          How can one personify an LLM so that it prioritizes logical and accurate answers over user satisfaction? Is that even possible, or will the goal of fulfilling the user’s request always usurp that integrity? At this stage in LLM development, evidence points to the latter. Say a company uses an AI model to process resumes. 5 different models can give 5 different evaluations for the exact same resume, all based on the prompt and persona given.
        </p>
        <p>
          Can we even consider LLMs to be reliable for evaluation tasks, or is it too subjective and variable to be efficiently used in these problems? There’s also the critique of the lack of reproducibility. The differences in output between slightly different prompts and personas speaks to the instability of LLM output and caution users to be cognizant of these discrepancies.
        </p>
      </>
    )
  }
];

export default function BlogPage() {
  // This state keeps track of which post ID is currently expanded. 
  // Null means all are closed.
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const togglePost = (id: number) => {
    // If the clicked post is already open, close it. Otherwise, open it.
    if (expandedPostId === id) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(id);
    }
  };

  return (
    <div className="animate-fadeIn max-w-3xl">
      <section>
        {/* Matching Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 inline-block pb-2">
          Blog & Write-ups
        </h2>
        
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          A collection of short essays, blog posts, and other recent written material. Documentation is important! I want to share my thoughts and reflections on the field as I continue to learn and grow. The knowledge barrier has never been smaller and its time to share and learn together.
        </p>

        {/* Blog Posts List */}
        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => {
            const isExpanded = expandedPostId === post.id;

            return (
              <div 
                key={post.id} 
                className={`bg-white rounded-xl border transition-all duration-300 shadow-sm overflow-hidden ${isExpanded ? 'border-blue-300 ring-1 ring-blue-100' : 'border-gray-200 hover:border-blue-200 hover:shadow-md cursor-pointer'}`}
              >
                {/* Clickable Header Area */}
                <div 
                  className="p-6 pb-4"
                  onClick={() => togglePost(post.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                    <span className="text-sm font-medium text-gray-500 whitespace-nowrap ml-4">
                      {post.date}
                    </span>
                  </div>
                  
                  {/* Show summary only if the post is CLOSED */}
                  {!isExpanded && (
                    <p className="text-gray-600 mt-2">{post.summary}</p>
                  )}
                  
                  {/* Read More / Read Less Toggle Indicator */}
                  <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-1 cursor-pointer">
                    {isExpanded ? "Close essay" : "Read full essay"}
                    <span className="text-lg leading-none">{isExpanded ? "↑" : "↓"}</span>
                  </div>
                </div>

                {/* Expanded Content Area (Only renders if isExpanded is true) */}
                {isExpanded && (
                  <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50 mt-2 text-gray-800 leading-relaxed">
                    <div className="mt-4">
                      {post.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}