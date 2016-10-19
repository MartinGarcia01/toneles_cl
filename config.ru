use Rack::Static,
  :urls => ["/lib", "/imagenes", "/modulos", "/views"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('views/index.html', File::RDONLY)
  ]
}