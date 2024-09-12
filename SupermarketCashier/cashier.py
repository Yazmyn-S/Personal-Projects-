def enterProducts():
    buyingData = {}                                                 # List out the product and quantity 
    enterDetails = True                                             # Start and Stop adding products
    while enterDetails:                                             # Continue to add products 
        details = input("Press A to Add product and Q to quit.")
        if details == 'A':
            product = input("Enter Product: ")                      # Enter the product and quantity
            quantity = int(input("Enter Quantity: "))
            buyingData.update({product : quantity})                 # Update addes values to the dictionary 
        elif details == 'Q':
            enterDetails = False
        else:
            print("Please select a correct option")
    return buyingData

def getPrice(product, quantity):
    # This part seems to be manual. Making this list. I wonder if it could be automated
    priceList = {
        "Biscuit": 3,
        "Chicken": 5,
        "Egg": 1,
        "Fish": 3,
        "Coke": 2,
        "Bread": 2,
        "Apple": 3,
        "Onion": 3
    }
    
    subtotal = priceList[product] * quantity    # Basic math got it (price of product * amount)
    print(product + '$' + str(priceList[product]) + 'x' + str(quantity) + '=' + str(subtotal))
    return subtotal

def getDiscount(billAmount, membership):
    discount = 0
    if billAmount >= 25:
        if membership == 'Gold':
            billAmount = billAmount * .80
            discount = 20
        elif membership == 'Silver':
            billAmount = billAmount * .90
            discount = 10
        elif membership == 'Bronze':
            billAmount = billAmount * .95
            discount = 5
        print(str(discount) + '% off for' + membership + ' ' + 'membership on total amount: $' + str(billAmount))
    else:
        print('No discount on amount less than $25')
    return billAmount

buyingData = enterProducts()
membership = input("Enter customer membership: ")
def makeBill(buyingData, membership):
    for(int i = 0; ;i++):
        getPrice(product, quantity)
        getDiscount(billAmount,membership)




