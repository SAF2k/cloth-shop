import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge";

const CartSheet = async () => {

    const cartLineItems = []

    const itemsCount = cartLineItems.length;

  return (
    <Sheet>
        <SheetTrigger>
            <Button>
                {itemsCount > 0 && (
                    <Badge >
                        {itemsCount}
                    </Badge>
                )}
                <Icons.cart className="w-6 h-6" aria-hidden="true"/>
            </Button>
        </SheetTrigger>
    </Sheet>
  )
}

export default CartSheet