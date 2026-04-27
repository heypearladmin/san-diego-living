'use client'

export default function BlogNewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to email service
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-white border border-stone-200 px-5 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
      />
      <button
        type="submit"
        className="bg-stone-900 text-white font-sans text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-stone-700 transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}
