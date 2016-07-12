from flask import Flask, render_template, request, flash



app = Flask(__name__)

app.secret_key = 'development key'

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'moovonjkm@gmail.com'
app.config["MAIL_PASSWORD"] = 'frenkel2'



@app.route('/')
def home():
  return render_template('home.html')

@app.route('/profiles')
def profiles():
  return render_template('profiles.html')

@app.route('/aboutme')
def aboutme():
  return render_template('aboutme.html')

@app.route('/skills/languages')
def languages():
  return render_template('languages.html')

@app.route('/skills/competitive-coding')
def cp():
  return render_template('cp.html')

@app.route('/projects')
def projects():
  return render_template('projects.html')

@app.route('/skills/framework')
def framework():
  return render_template('framework.html')

@app.route('/skills/tools')
def tools():
  return render_template('tools.html')

@app.route('/skillcase')
def skillcase():
  return render_template('skillcase.html')


#blog posts
@app.route('/blog')
def blog():
  return render_template('blogintro.html')

@app.route('/loveschool')
def loveschool():
  return render_template('loveschool.html')

@app.route('/installubuntu')
def installubuntu():
  return render_template('installubuntu.html')


@app.route('/get_pip_in_windows')
def getpiponwindows():
  return render_template('getpiponwindows.html')


@app.route('/convert py to exe files')
def pytoexeusingcxfreeze():
  return render_template('pytoexeusingcxfreeze.html')

@app.route('/my summary of 2015')
def conclusion2015():
  return render_template('conclusion2015.html')

@app.route('/motivational story-1')
def motivationalstory1():
  return render_template('motivationalstory1.html')

@app.route('/secret-hacks-tricks-for-JEE')
def iitjee():
  return render_template('iitjee.html')

#blog posts


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/getintouch')
def getintouch():

    return render_template('getintouch.html')

if __name__ == '__main__':
  app.run(debug=True,port=5021)