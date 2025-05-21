import { WidgetItem } from "@/components"


export default function DashboardPage(){

  const cards = [
    {
      title: 'Global Activities',
      subTitle: 'Compared to last week',
      amount: "23,988",
      porcentage: "2",
      lastPrice: "13,988"
    }
  ]


  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* TODO: src/components <WidgetItem /> */}
            {
              cards.map( card => (
                <WidgetItem key={ card.title } {...card} />
              ))
            }
            {/* TODO: Fin <WidgetItem /> */}

    </div> 
  )
}

