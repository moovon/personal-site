from flask import Flask, render_template, request
from form import ContactForm
from flask.ext.mail import Message, Mail

mail = Mail()

app = Flask(__name__)

app.secret_key = 'development key'

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'moovonjkm@gmail.com'
app.config["MAIL_PASSWORD"] = 'frenkel2'

mail.init_app(app)
  
@app.route('/')
def home():
  return render_template('home.html')
  
@app.route('/aboutme')
def aboutme():
  return render_template('aboutme.html')

@app.route('/projects')
def projects():
  return render_template('projects.html')

@app.route('/getintouch', methods=['GET', 'POST'])
def getintouch():
  form = ContactForm()

  if request.method == 'POST':
    if form.validate() == False:
      flash('All fields are required.')
      return render_template('getintouch.html', form=form)
    else:
      msg = Message(form.subject.data, sender='contact@example.com', recipients=['moovonjkm@gmail.com'])
      msg.body = """
      From: %s <%s>
      %s
      """ % (form.name.data, form.email.data, form.message.data)
      mail.send(msg)

      return render_template('getintouch.html', success=True)

  elif request.method == 'GET':
    return render_template('getintouch.html', form=form)
  
if __name__ == '__main__':
  app.run(debug=True)