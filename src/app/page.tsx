export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-text-gray text-lg">
          I create interactive experiences and generative visuals on the web.
          Through user interactions, I craft unexpected moments that engage and inspire.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Geometric shapes will be added here in the future */}
        <div className="aspect-square bg-grid-gray rounded-lg hover:bg-text-gray transition-colors duration-300"></div>
        <div className="aspect-square bg-grid-gray rounded-lg hover:bg-text-gray transition-colors duration-300"></div>
        <div className="aspect-square bg-grid-gray rounded-lg hover:bg-text-gray transition-colors duration-300"></div>
        <div className="aspect-square bg-grid-gray rounded-lg hover:bg-text-gray transition-colors duration-300"></div>
      </div>
    </div>
  )
} 