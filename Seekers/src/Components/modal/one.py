import requests
from bs4 import BeautifulSoup

url = "https://dir.indiamart.com/search.mp?ss=designer+men+t+shirt&prdsrc=1&src=as-popular%7Ckwd%3Ddesigner+ts%7Cpos%3D3%7Ccat%3D-2%7Cmcat%3D-2%7Ckwd_len%3D11%7Ckwd_cnt%3D2&cq=Pune&res=RC5&stype=attr=1|attrS&Mspl=0&qry_typ=S&City=pune"

r = requests.get(url)

htmlContent = r.content

print(htmlContent)