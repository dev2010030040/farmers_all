import asyncio
from pyppeteer import launch
from PIL import Image
import os

async def scrape(lg, lt):
   browser = await launch(headless=True)
   page = await browser.newPage()

   url = f'https://www.google.com/maps/@{lg},{lt},344m/data=!3m1!1e3!5m1!1e8?entry=ttu'
   await page.goto(url)
   await asyncio.sleep(5)

   await page.keyboard.down('Control')
   await page.keyboard.press('P')
   await page.keyboard.up('Control')

   await page.keyboard.press('ArrowDown')
   await page.keyboard.press('ArrowDown')

   ss_dir = os.path.join(os.path.dirname(__file__),'inputs')
   os.makedirs(ss_dir, exist_ok=True)
   await page.screenshot({'path':
'.//inputs//{filename}.png'.format(filename='location'),'fullPage':
True})
   await browser.close()

   img = Image.open(ss_dir+"/location.png")

   w, h = img.size

   left = 0
   upper = h//4
   right = h-10
   lower = h

   cropped_img = img.crop((left, upper, right, lower))

   cropped_img.save(ss_dir+'/location.png')

   return True

def main(longitude, latitude):
    # longitude = '17.4828752'
    # latitude = '78.3270485'
    asyncio.get_event_loop().run_until_complete(scrape(longitude, latitude))

