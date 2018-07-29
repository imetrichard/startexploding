class CustomAuth
  attr_reader :app, :password

  def initialize(app, opts = {})
    @app = app
    @password = opts[:password]
  end

  def call(env)
    request = Rack::Request.new(env)
    params = request.params

    if request.path.start_with?('/projects') && !request.session[:logged_in]
      request.session[:path] = request.path
      redirect '/login.html'

    elsif request.path == '/login'
      if params['password'] == password
        request.session[:logged_in] = true
        redirect(request.session[:path] || '/index.html')

      else
        unauthorized
      end

    else
      @app.call(env)
    end
  end

  private

  def redirect(path)
    [307, { 'Location' => path }, ['You are being redirected']]
  end

  def unauthorized
    [401, {}, ['Unauthorized!']]
  end
end
