import React from 'react'

export default function DocsSummary() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-6">
      <h2 className="text-2xl font-semibold mb-4">Docs Snapshot</h2>
      <p className="text-gray-700 mb-4">
        A quick overview of the project vision, architecture, and codebase rules.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          <strong>Vision:</strong> AgentHub is an operating layer for AI agents — a
          platform for building, distributing, and operating trusted digital
          employees. <a href="https://github.com/hungpt99-dev/ai-super-app-desktop/blob/main/docs/vision.md" className="text-blue-600">Read more</a>
        </li>
        <li>
          <strong>Architecture:</strong> Deterministic, graph-based runtime with
          memory, tools, sandboxing, and marketplace. Focus on permissions and
          replayable snapshots. <a href="https://github.com/hungpt99-dev/ai-super-app-desktop/blob/main/docs/technical-design.md" className="text-blue-600">Read more</a>
        </li>
        <li>
          <strong>Codebase rules:</strong> Monorepo layout with strict package
          boundaries (shared → core → infra → apps), adapters via interfaces,
          and no environment leakage. <a href="https://github.com/hungpt99-dev/ai-super-app-desktop/blob/main/docs/codebase.md" className="text-blue-600">Read more</a>
        </li>
      </ul>
    </section>
  )
}
