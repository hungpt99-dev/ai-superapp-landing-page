import { Terminal, Package, Shield, Cpu, Database, Bell, Radio, Monitor, Brain } from 'lucide-react'

function CodeBlock({ lang = 'typescript', code }: { lang?: string; code: string }) {
  return (
    <div className="rounded-xl overflow-hidden mb-6">
      <div className="flex items-center gap-2 bg-gray-900 border-b border-white/10 px-4 py-2">
        <Terminal size={12} className="text-gray-500" />
        <span className="text-xs text-gray-500">{lang}</span>
      </div>
      <pre className="bg-gray-900 p-4 text-xs text-gray-300 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function SectionHeading({ id, icon: Icon, color, title, subtitle }: {
  id: string
  icon: React.ElementType
  color: string
  title: string
  subtitle: string
}) {
  return (
    <div id={id} className="flex items-start gap-4 mb-6 scroll-mt-20">
      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={18} />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-0.5">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}

function PropTable({ rows }: { rows: Array<{ name: string; type: string; required?: boolean; desc: string }> }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03]">
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Property</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Type</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Req</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className={`${i % 2 === 0 ? '' : 'bg-white/[0.02]'} border-b border-white/5 last:border-0`}>
              <td className="px-4 py-3 font-mono text-indigo-300 text-xs">{r.name}</td>
              <td className="px-4 py-3 font-mono text-purple-300 text-xs">{r.type}</td>
              <td className="px-4 py-3 text-xs">{r.required ? <span className="text-rose-400">yes</span> : <span className="text-gray-600">—</span>}</td>
              <td className="px-4 py-3 text-gray-400 text-xs leading-relaxed">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SDKPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
          SDK Reference
        </p>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Agent SDK
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          The TypeScript SDK for building and publishing agents on the AgentHub platform.
          Every agent is a module declared with <code className="text-indigo-300 bg-indigo-900/30 px-1.5 py-0.5 rounded text-sm">defineModule</code>.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <Package size={18} className="text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Installation</h2>
        </div>
        <CodeBlock lang="shell" code={`npm install @agenthub/sdk`} />
        <CodeBlock code={`import { defineModule, Permission } from '@agenthub/sdk'`} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* defineModule */}
      <section className="mb-12">
        <SectionHeading
          id="define-module"
          icon={Package}
          color="bg-indigo-400/10 border-indigo-400/20 text-indigo-400"
          title="defineModule"
          subtitle="The entry point for every agent — declare your manifest, permissions, tools, and lifecycle hooks."
        />
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          All agents <strong className="text-gray-200">must</strong> use <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">defineModule</code> as their default export.
          Never export raw objects or use <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">module.exports</code>.
        </p>

        <CodeBlock code={`import { defineModule, Permission } from '@ai-superapp/sdk'

export default defineModule({
  manifest: {
    name: 'My Writing Assistant',
    version: '1.0.0',
    minCoreVersion: '1.0.0',
    maxCoreVersion: '2.0.0',
    description: 'Writes polished blog posts from a short brief.',
    author: 'Your Name',
    icon: '✍️',
    category: 'writing',
    tags: ['writing', 'blog', 'SEO'],
  },
  permissions: [
    Permission.AiGenerate,
    Permission.StorageLocal,
    Permission.UiNotify,
  ],
  tools: [writeBlogPost],
  onActivate(ctx) {
    ctx.ui.notify({ title: 'Writing Assistant ready', body: '', level: 'success' })
  },
  onDeactivate(ctx) {
    // cleanup if needed
  },
})`} />

        <PropTable rows={[
          { name: 'manifest', type: 'IModuleManifest', required: true, desc: 'Metadata about the module — name, version, category, permissions, etc.' },
          { name: 'permissions', type: 'Permission[]', required: true, desc: 'All permissions the module may use. Access to any permission not declared here will throw at runtime.' },
          { name: 'tools', type: 'ITool[]', required: false, desc: 'Array of tool definitions. Tools are callable units of work the AI can invoke.' },
          { name: 'onActivate', type: '(ctx: IModuleContext) => void | Promise<void>', required: true, desc: 'Called when the user enables the module. Set up subscriptions and initial state here.' },
          { name: 'onDeactivate', type: '(ctx: IModuleContext) => void | Promise<void>', required: false, desc: 'Called when the user disables the module. Clean up listeners and resources here.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Permissions */}
      <section className="mb-12" id="permissions">
        <SectionHeading
          id="permissions"
          icon={Shield}
          color="bg-green-400/10 border-green-400/20 text-green-400"
          title="Permissions"
          subtitle="Declare every capability your module needs. Users see and approve these before install."
        />
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Permissions are enforced at the SDK proxy layer — calling an API your module hasn't declared
          will throw a <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">PermissionDeniedError</code> at runtime, regardless of what the code tries to do.
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Permission</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Value</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Risk</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Grants access to</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AiGenerate', 'ai.generate', 'Low', 'ctx.ai.generate()'],
                ['AiStream', 'ai.stream', 'Low', 'ctx.ai.stream()'],
                ['StorageLocal', 'storage.local', 'Low', 'ctx.storage (read + write)'],
                ['StorageRead', 'storage.read', 'Low', 'ctx.storage.get(), keys()'],
                ['StorageWrite', 'storage.write', 'Low', 'ctx.storage.set(), delete(), clear()'],
                ['UiNotify', 'ui.notify', 'Low', 'ctx.ui.notify()'],
                ['UiDashboard', 'ui.dashboard', 'Low', 'ctx.ui.showDashboard(), hideDashboard()'],
                ['EventsPublish', 'events.publish', 'Low', 'ctx.events.publish()'],
                ['EventsSubscribe', 'events.subscribe', 'Low', 'ctx.events.subscribe()'],
                ['MemoryRead', 'memory.read', 'Low', 'ctx.memory.list(), get(), buildContext(), getHistory()'],
                ['MemoryWrite', 'memory.write', 'Low', 'ctx.memory.upsert(), delete(), appendMessages(), clearSession()'],
                ['ComputerScreenshot', 'computer.screenshot', 'Medium', 'ctx.computer.screenshot(), screenshotRegion(), screenSize()'],
                ['ComputerInput', 'computer.input', 'Medium', 'ctx.computer.mouseMove(), keyType(), hotkey(), etc.'],
                ['ComputerClipboard', 'computer.clipboard', 'Medium', 'ctx.computer.clipboardGet(), clipboardSet()'],
                ['ComputerShell', 'computer.shell', 'High ⚠️', 'ctx.computer.launchApp(), runShell()'],
                ['ComputerFiles', 'computer.files', 'High ⚠️', 'ctx.computer.readFile(), writeFile(), appendFile()'],
              ].map(([name, value, risk, grants], i) => (
                <tr key={name} className={`${i % 2 === 0 ? '' : 'bg-white/[0.02]'} border-b border-white/5 last:border-0`}>
                  <td className="px-4 py-3 font-mono text-indigo-300 text-xs">{name}</td>
                  <td className="px-4 py-3 font-mono text-purple-300 text-xs">{value}</td>
                  <td className={`px-4 py-3 text-xs font-medium ${risk.includes('High') ? 'text-rose-400' : risk === 'Medium' ? 'text-amber-400' : 'text-green-400'}`}>{risk}</td>
                  <td className="px-4 py-3 text-gray-400 text-xs font-mono">{grants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Tools */}
      <section className="mb-12" id="tools">
        <SectionHeading
          id="tools"
          icon={Cpu}
          color="bg-yellow-400/10 border-yellow-400/20 text-yellow-400"
          title="Tools"
          subtitle="Discrete, callable units of work that the AI can invoke by name."
        />
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Tools are how your Mini-App exposes actions to the AI. Each tool has a name, description,
          optional JSON Schema for inputs, and a <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">run</code> function.
        </p>
        <CodeBlock code={`import type { ITool, IModuleContext } from '@ai-superapp/sdk'

const writeBlogPost: ITool = {
  name: 'write_blog_post',
  description: 'Write a polished blog post from a topic and brief.',
  inputSchema: {
    type: 'object',
    properties: {
      topic: { type: 'string', description: 'Blog post topic' },
      wordCount: { type: 'number', description: 'Target word count' },
    },
    required: ['topic'],
  },
  async run(input, ctx: IModuleContext) {
    const { output } = await ctx.ai.generate({
      capability: 'write',
      input: \`Write a \${input.wordCount ?? 500}-word blog post about: \${input.topic}\`,
    })
    await ctx.storage.set('last_post', output)
    return { content: output }
  },
}`} />
        <PropTable rows={[
          { name: 'name', type: 'string', required: true, desc: 'Unique identifier for the tool. Use snake_case.' },
          { name: 'description', type: 'string', required: true, desc: 'Human-readable description. Used by the AI to decide when to call this tool.' },
          { name: 'inputSchema', type: 'Record<string, unknown>', required: false, desc: 'JSON Schema object describing the expected input shape.' },
          { name: 'run', type: '(input, ctx) => Promise<unknown>', required: true, desc: 'The tool implementation. Receives validated input and the module context.' },
        ]} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* AI Client */}
      <section className="mb-12" id="ai-client">
        <SectionHeading
          id="ai-client"
          icon={Cpu}
          color="bg-indigo-400/10 border-indigo-400/20 text-indigo-400"
          title="AI Client — ctx.ai"
          subtitle="Generate text or stream tokens from your configured AI provider."
        />
        <p className="text-sm text-gray-400 mb-2">
          Requires: <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.AiGenerate</code> or <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.AiStream</code>
        </p>
        <CodeBlock code={`// One-shot generation
const { output, tokensUsed, model } = await ctx.ai.generate({
  capability: 'write',    // logical capability name
  input: 'Summarize this article: ...',
  context: { style: 'bullet-points' },  // optional metadata
})

// Streaming (token-by-token)
for await (const token of ctx.ai.stream({ capability: 'chat', input: prompt })) {
  process.stdout.write(token)
}`} />
        <PropTable rows={[
          { name: 'capability', type: 'string', required: true, desc: 'Logical capability name (e.g. "write", "chat", "summarize"). Maps to a provider model on the backend.' },
          { name: 'input', type: 'string', required: true, desc: 'The prompt or user message to send to the AI.' },
          { name: 'context', type: 'Record<string, unknown>', required: false, desc: 'Optional metadata passed alongside the request (style hints, domain, etc.).' },
        ]} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Storage */}
      <section className="mb-12" id="storage">
        <SectionHeading
          id="storage"
          icon={Database}
          color="bg-teal-400/10 border-teal-400/20 text-teal-400"
          title="Storage API — ctx.storage"
          subtitle="Persistent key-value store namespaced to your module."
        />
        <p className="text-sm text-gray-400 mb-2">
          Requires: <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.StorageLocal</code> (or separate Read/Write)
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Storage is namespaced per module — one module cannot access another module's stored data.
          Values are serialised as JSON and stored in the local SQLite database.
        </p>
        <CodeBlock code={`// Write
await ctx.storage.set('config', { theme: 'dark', locale: 'en' })

// Read (returns null if not found)
const config = await ctx.storage.get<{ theme: string }>('config')

// Delete a key
await ctx.storage.delete('config')

// List all keys owned by this module
const keys = await ctx.storage.keys()  // ['config', 'last_run', ...]

// Clear all data (useful on deactivate)
await ctx.storage.clear()`} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* UI */}
      <section className="mb-12" id="ui">
        <SectionHeading
          id="ui"
          icon={Bell}
          color="bg-pink-400/10 border-pink-400/20 text-pink-400"
          title="UI API — ctx.ui"
          subtitle="Show notifications and control dashboard visibility."
        />
        <p className="text-sm text-gray-400 mb-2">
          Requires: <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.UiNotify</code> / <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.UiDashboard</code>
        </p>
        <CodeBlock code={`// Show a notification
ctx.ui.notify({
  title: 'Blog post ready',
  body: 'Your 500-word post on TypeScript has been generated.',
  level: 'success',  // 'info' | 'success' | 'warning' | 'error'
})

// Dashboard control
ctx.ui.showDashboard()
ctx.ui.hideDashboard()`} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Events */}
      <section className="mb-12" id="events">
        <SectionHeading
          id="events"
          icon={Radio}
          color="bg-orange-400/10 border-orange-400/20 text-orange-400"
          title="Event Bus — ctx.events"
          subtitle="Publish and subscribe to platform-wide events between modules."
        />
        <p className="text-sm text-gray-400 mb-2">
          Requires: <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.EventsPublish</code> / <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.EventsSubscribe</code>
        </p>
        <CodeBlock code={`// Publish
ctx.events.publish('content:generated', { title: 'My Post', wordCount: 500 })

// Subscribe — returns an unsubscribe function
const unsub = ctx.events.subscribe<{ title: string }>('content:generated', (payload) => {
  console.log('New content:', payload.title)
})

// Unsubscribe on module deactivate
onDeactivate(ctx) {
  unsub()
}`} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Computer API */}
      <section className="mb-12" id="computer">
        <SectionHeading
          id="computer"
          icon={Monitor}
          color="bg-sky-400/10 border-sky-400/20 text-sky-400"
          title="Computer API — ctx.computer"
          subtitle="Full OS control — screenshots, mouse, keyboard, clipboard, shell, files."
        />
        <div className="mb-4 bg-amber-900/20 border border-amber-500/30 rounded-xl px-5 py-4 text-sm text-amber-300">
          ⚠️ <strong>High-risk permissions:</strong> <code className="bg-amber-900/30 px-1 py-0.5 rounded text-xs">computer.shell</code> and <code className="bg-amber-900/30 px-1 py-0.5 rounded text-xs">computer.files</code> require explicit user approval and are flagged during marketplace review. Only request what you actually need.
        </div>
        <CodeBlock code={`// Screenshot
const screenshot = await ctx.computer.screenshot()
// screenshot.dataUri  — PNG data URI
// screenshot.width / screenshot.height

// Mouse control
await ctx.computer.mouseMove(100, 200)
await ctx.computer.mouseClick({ x: 100, y: 200, button: 'left' })
await ctx.computer.mouseDoubleClick({ x: 100, y: 200 })
await ctx.computer.mouseScroll({ x: 0, y: 0, deltaY: -3 })

// Keyboard
await ctx.computer.keyType('Hello, world!')
await ctx.computer.keyPress('Return')
await ctx.computer.hotkey(['Meta', 'C'])   // ⌘C on macOS

// Clipboard
const text = await ctx.computer.clipboardGet()
await ctx.computer.clipboardSet('Copied text')

// Shell & files
const result = await ctx.computer.runShell('ls -la ~/Desktop')
// result.exitCode / result.stdout / result.stderr

const content = await ctx.computer.readFile('/Users/me/notes.txt')
await ctx.computer.writeFile('/Users/me/output.md', '# Title\\n...')

// AI-powered computer agent
const agent = ctx.computer.createAgent('Open Safari and navigate to github.com', {
  maxSteps: 10,
  stepDelayMs: 800,
})
const agentResult = await agent.run(step => {
  console.log(\`Step \${step.index}:\`, step.action.type)
})
// agentResult.success / agentResult.steps / agentResult.result`} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Memory */}
      <section className="mb-12" id="memory">
        <SectionHeading
          id="memory"
          icon={Brain}
          color="bg-violet-400/10 border-violet-400/20 text-violet-400"
          title="Memory API — ctx.memory"
          subtitle="Persistent local memory and conversation history stored on-device in SQLite."
        />
        <p className="text-sm text-gray-400 mb-2">
          Requires: <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.MemoryRead</code> / <code className="text-indigo-300 bg-indigo-900/30 px-1 py-0.5 rounded text-xs">Permission.MemoryWrite</code>
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Memory is stored entirely on the user's machine — nothing is sent to our servers.
          Use it to persist facts, preferences, and conversation context across runs.
        </p>
        <CodeBlock code={`// Write a memory entry (insert or update by title)
const mem = await ctx.memory.upsert({
  type: 'preference',   // 'fact'|'preference'|'instruction'|'episode'|'summary'|'workflow'
  title: 'user_writing_style',
  content: 'Prefers short paragraphs and active voice.',
  source: 'my-module',
})

// List memories
const memories = await ctx.memory.list({ type: 'preference', limit: 10 })

// Build a system-prompt context block
const contextBlock = await ctx.memory.buildContext({ maxEntries: 5 })
// → "## Relevant context\\n- Prefers short paragraphs..."

// Conversation history
const SESSION = 'chat-abc123'
await ctx.memory.appendMessages(SESSION, [
  { role: 'user', content: 'Write me a blog post about Go.' },
  { role: 'assistant', content: '...' },
])
const history = await ctx.memory.getHistory(SESSION, 20)

// Stats
const stats = await ctx.memory.stats()
// stats.totalMemories / stats.byType`} />
      </section>

      <hr className="border-white/10 mb-12" />

      {/* Full example */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5">Complete Mini-App Example</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          A full writing assistant that uses AI generation, local storage, memory, and notifications:
        </p>
        <CodeBlock code={`import { defineModule, Permission } from '@ai-superapp/sdk'
import type { ITool, IModuleContext } from '@ai-superapp/sdk'

const generatePost: ITool = {
  name: 'generate_post',
  description: 'Generate a blog post on the given topic.',
  inputSchema: {
    type: 'object',
    properties: {
      topic: { type: 'string' },
      tone: { type: 'string', enum: ['professional', 'casual', 'technical'] },
    },
    required: ['topic'],
  },
  async run(input, ctx: IModuleContext) {
    // Load user writing preferences from memory
    const memContext = await ctx.memory.buildContext({ maxEntries: 3 })

    const { output, tokensUsed } = await ctx.ai.generate({
      capability: 'write',
      input: [
        memContext,
        \`Write a blog post on: \${input.topic}\`,
        \`Tone: \${input.tone ?? 'professional'}\`,
      ].join('\\n'),
    })

    // Persist the result
    await ctx.storage.set('last_post', { topic: input.topic, content: output })

    // Save this run as an episode memory
    await ctx.memory.upsert({
      type: 'episode',
      title: \`Post: \${input.topic}\`,
      content: \`Generated a \${output.length}-char post. Tokens used: \${tokensUsed}\`,
    })

    ctx.ui.notify({
      title: 'Post generated ✓',
      body: \`\${Math.round(output.length / 5)} words on "\${input.topic}"\`,
      level: 'success',
    })

    return { content: output, tokensUsed }
  },
}

export default defineModule({
  manifest: {
    name: 'Writing Assistant',
    version: '1.0.0',
    minCoreVersion: '1.0.0',
    maxCoreVersion: '2.0.0',
    description: 'AI-powered blog post generator.',
    icon: '✍️',
    category: 'writing',
  },
  permissions: [
    Permission.AiGenerate,
    Permission.StorageLocal,
    Permission.UiNotify,
    Permission.MemoryRead,
    Permission.MemoryWrite,
  ],
  tools: [generatePost],
  onActivate(ctx) {
    ctx.ui.notify({ title: 'Writing Assistant ready', body: '', level: 'info' })
  },
})`} />
      </section>
    </div>
  )
}
