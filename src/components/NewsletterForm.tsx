'use client'

interface NewsletterFormProps {
  dark?: boolean
}

export default function NewsletterForm({ dark = false }: NewsletterFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to email service
  }

  if (dark) {
    return (
      <form className="flex gap-0" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 bg-stone-900 border border-stone-800 px-4 py-2.5 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
        />
        <button
          type="submit"
          className="bg-gold text-stone-950 font-sans text-xs tracking-wider px-4 py-2.5 hover:bg-gold-dark transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    )
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 bg-stone-800 border border-stone-700 px-5 py-3.5 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
      />
      <button
        type="submit"
        className="bg-gold text-stone-950 font-sans text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-gold-dark transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
