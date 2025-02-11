export const Footer = () => {
  return (
    <footer className="fixed bottom-8 left-0 right-0 mx-auto w-full flex justify-center animate-fade-in animate-delay-300">
      <small>
        © {new Date().getFullYear()} Cuanto-debo - con 🧡 por <a href="mailto:pabloj.pedraza@gmail.com">Pablo Pedraza</a>
      </small>
    </footer>
  )
}
