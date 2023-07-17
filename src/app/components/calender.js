import { clsx } from 'clsx'

const data = [
    {
        title: "Birthday",
        description: "31st birthday",
        startDate: new Date("2023, 03, 02"),
        color: "black",
        length: 1,
        who: "",
        where: ""
    }
]

const Calender = ({ year }) => {
    const arrBack = new Array(384).fill("")
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div 
            className="min-h-[800px] grid grid-cols-32 gap-[1px] w-5/6 border border-slate-400"
        >
            {arrBack.map((d, i)=> {
                // Map over days from 0 - 383
                // Month as number 1 - 12
                const monthAsNum = Math.floor(( i/32 )) + 1 
                const date = new Date(year, monthAsNum - 1, i % 32)
                if(datesAreEqual(date, data[0].startDate)) console.log(date)

                // If multiple of 32 then its a month name otherwise number of
                // month if neither then don't print as not valid date
                const dayOfMonth =  i % 32 <= new Date(year, monthAsNum, 0).getDate() ? i % 32 : null

                // Is true if its the column that holds the month and assign month name
                const month = i % 32 == 0 && months[monthAsNum - 1]

                const isWeekend = dayOfMonth ? dateIsWeekend(new Date(year, monthAsNum - 1 , i % 32)): false

                const today = new Date()
                const isToday = datesAreEqual(today, new Date(year, monthAsNum - 1, i % 32))


                return (
                    <>
                        {month ? <Month month={month}/> :
                        <Day 
                            date={dayOfMonth ? date : null}
                            isWeekend={isWeekend}
                            isToday={isToday}
                            dayOfMonth={dayOfMonth} 
                        />
                        }
                    </>
                )
            })}
        </div>
    )
}

const dateIsWeekend = (date) => {
    return date.getDay() % 6 == 0
}

const datesAreEqual = (dateA, dateB) => {
    return dateA.toDateString() === dateB.toDateString()
}

const Month = ({month}) => {
    return (
        <div className="flex justify-center items-center bg-white text-stone-500">
            {month}
        </div>
    )
}

const Day = ({date, dayOfMonth, isWeekend, isToday}) => {
    return (
        <div 
            className={
                clsx(
                "flex flex-col items-center text-stone-500/80 text-xs",
                    isWeekend && "bg-blue-200",
                    dayOfMonth && !isWeekend && "bg-white",
                    isToday && "bg-yellow-200",
                    dayOfMonth && "hover:cursor-pointer hover:bg-opacity-50"
            )}
            onClick={() => date && alert(date)}
        >
            {dayOfMonth}
        </div>
    )
}


export default Calender

