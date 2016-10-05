use Rack::Static,
  :urls => ["/imagenes", "/js", "/css","/fonts", "/views", "/lib", "/modulos"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/newindex.html', File::RDONLY)
  ]
}