# -*- coding: utf-8 -*-
import sqlite3
import sys

con = None

try:
	con = sqlite3.connect('flask.db')

	cur = con.cursor()
	cur.execute('select * from user')

	data = cur.fetchall()

	for row in data:
		print row
except sqlite3.Error, e:
	print 'error'
	sys.exit(1)
finally:
	if con:
		con.close()

