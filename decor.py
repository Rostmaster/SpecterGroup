import time

def timer(func):
    start = time.time()
    def wrapper():
        result = func()
        end = time.time()
        print(f"It took: {end - start: 0.2}")
        return result
    return wrapper

@timer
def calculate():
    x = 5
    y = 6
    operation = '-'
    time.sleep(2)
    if operation == '+':
        time.sleep(0.5)
        return x + y
    elif operation == '-':
        time.sleep(1)
        return x - y


if __name__ == "__main__":
    print(calculate())