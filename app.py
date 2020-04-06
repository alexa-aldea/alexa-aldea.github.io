from flask import Flask, render_template

app = Flask(__name__)

labels_mar = ['Mar'+str(i) for i in range(12, 32)]
labels_apr = ['Apr'+str(i) for i in range(1, 7)]

day_labels = labels_mar + labels_apr + []

no_deaths = {
    'SWE': [1, 0,  1,  1,  4,  1,  2,  1,  5,  4,  1,  6, 13, 22, 15, 28,  0,  5, 36, 34, 59, 69, 50, 15, 28, 76],
    'NOR': [1, 0,  2,  0,  0,  0,  3,  1,  0,  0,  0,  3,  2,  2,  0,  5,  4,  3,  6,  7,  5,  6,  9,  3,  9,  5],
    'DNK': [0, 0,  1,  1,  2,  0,  0,  2,  3,  4,  0, 11,  8,  2,  7, 11, 13,  7,  5, 13, 14, 19, 16, 22, 18,  8],
    'UK' : [0, 0, 10, 14, 20, 16, 33, 40, 33, 56, 48, 54, 87, 41,115,181,260,209,180,381,563,569,684,708,621,439],
}

population = {
    'SWE': 10084524,
    'NOR':  5411300,
    'DNK':  5787448,
    'UK':  67802740,
}

no_deaths_per1M = {}
for country in population.keys():
    no_deaths_per1M[country] = [n/population[country]*1000000 for n in no_deaths[country]]


@app.route('/')
def line():
    return render_template('index.html', values=no_deaths_per1M, labels=day_labels)


if __name__ == "__main__":
    app.run(debug=True)