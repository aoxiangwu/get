from requests import get
from bs4 import BeautifulSoup as Bs

url = 'https://raw.githubusercontent.com/posclegom/programthink/master/index.html'
html = Bs(get(url).text, 'html.parser')
print(html.select('b')[0])