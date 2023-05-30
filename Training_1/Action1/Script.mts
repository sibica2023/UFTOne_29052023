
Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategory").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategory")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Product_Price").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$1,279.00")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("rabbit").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("rabbit")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Quantity").Set DataTable("p_Quantity", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Your shopping cart is").Check CheckPoint("Your shopping cart is empty") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Your shopping cart is")_;_script infofile_;_ZIP::ssf24.xml_;_
'Wait (5)
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cart_Items").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click


Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click

'Set context
AIUtil("button", "CHECKOUT ($2,558.00)").Click


If True Then
	
	
End If

For Iterator = 1 To 1 Step 1
	
	If True Then
		
	End If
Next

