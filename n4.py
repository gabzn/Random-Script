from plyer import notification
from playsound import playsound
import requests
import time
import json
import emoji

# s_musicfile = MUSIC PATH HERE.
# s_musicfile = s_musicfile.replace(" ", "%20")

def get_qoute():
    response = requests.get("https://zenquotes.io/api/random")
    json_data = json.loads(response.text)
    qoute = json_data[0]['q'] + " -" + json_data[0]['a']
    return qoute

def notify():
    qoute = get_qoute()
    notification.notify(title = "Time for a break",
                        message = qoute,
                        app_icon = None,
                        timeout = 10
                        )

print("Hi! A reminder for how many minutes?")
mins = int(input("Enter a number in minutes: "))
print("Ok I will remind you every " + str(mins) + " minutes Good luck")

mins = mins * 60

while True:
    playsound(s_musicfile)
    time.sleep(1)
    notify()
    time.sleep(mins)
