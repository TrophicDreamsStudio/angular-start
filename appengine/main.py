import os
import webapp2
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        temp = os.path.join(os.path.dirname(__file__),'static/index.html')        
        self.response.out.write(template.render(temp, {}))


app = webapp2.WSGIApplication([
                                  ('/', MainPage),
                              ], debug=True)