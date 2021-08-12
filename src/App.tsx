function App() {
  return (
    <div className="App">
      <figure className="p-8 bg-gray-100 md:flex rounded-xl md:p-0">
        <img
          className="w-32 h-32 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
          src="https://i.picsum.photos/id/832/200/300.jpg?hmac=6gMt7WeRsS41_901ujRTrOgfwtW9MBZ375g8qXO3LUc"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
          <blockquote>
            <p className="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">Sarah Dayan</div>
            <div className="text-gray-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default App;
