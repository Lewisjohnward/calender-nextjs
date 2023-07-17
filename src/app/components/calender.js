import { clsx } from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import { Fragment } from 'react'

const data = [
    {
        title: "My birthday",
        description: "31st birthday",
        startDate: new Date("2023, 03, 02"),
        color: "#4287f5",
        length: 1,
        who: "",
        where: ""
    },
    {
        title: "Mums birthday",
        description: "31st birthday",
        startDate: new Date("2023, 03, 07"),
        color: "#4287f5",
        length: 1,
        who: "",
        where: ""
    },
    {
        title: "My birthday",
        description: "31st birthday",
        startDate: new Date("2023, 03, 02"),
        color: "#4287f5",
        length: 1,
        who: "",
        where: ""
    },
    {
        title: "Vicks birthday",
        description: "31st birthday",
        startDate: new Date("2023, 08, 28"),
        color: "#eb34d8",
        length: 1,
        who: "",
        where: ""
    },
    {
        title: "Junction 2",
        description: "31st birthday",
        startDate: new Date("2023, 07, 21"),
        color: "#eb34d8",
        length: 2,
        who: "",
        where: ""
    },
    {
        title: "Ems wedding",
        description: "31st birthday",
        startDate: new Date("2023, 09, 28"),
        color: "#ab14d8",
        length: 2,
        who: "",
        where: ""
    }
]

const Calender = ({ year }) => {
    const arrBack = new Array(384).fill("")
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div className="min-h-[800px] grid grid-cols-32 gap-[1px] w-5/6 border border-slate-300 bg-slate-300">
            {arrBack.map((d, i)=> {
                // Map over days from 0 - 383
                // Month as number 1 - 12
                const monthAsNum = Math.floor(( i/32 )) + 1 
                const date = new Date(year, monthAsNum - 1, i % 32)


                const appointments = data.filter(d => datesAreWithinRange(date, d.startDate, d.length))


                // If multiple of 32 then its a month name otherwise number of
                // month if neither then don't print as not valid date
                const dayOfMonth =  i % 32 <= new Date(year, monthAsNum, 0).getDate() ? i % 32 : null

                // Is true if its the column that holds the month and assign month name
                const month = i % 32 == 0 && months[monthAsNum - 1]

                const isWeekend = dayOfMonth ? dateIsWeekend(new Date(year, monthAsNum - 1 , i % 32)): false

                const today = new Date()
                const isToday = datesAreEqual(today, new Date(year, monthAsNum - 1, i % 32))

                return (
                    <Fragment key={uuidv4()}>
                        {month ? <Month 
                            month={month} /> 
                            :
                            <Day 
                                date={dayOfMonth ? date : null}
                                isWeekend={isWeekend}
                                isToday={isToday}
                                dayOfMonth={dayOfMonth} 
                                appointments={dayOfMonth ? appointments : []}
                            />
                        }
                    </Fragment>
                )
            })}
        </div>
    )
}

const datesAreWithinRange = (date, testDate, length) => {
    const startDate = testDate
    const endDate = new Date( startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + length );
     return startDate <= date && date < endDate
}

const dateIsWeekend = (date) => {
    return date.getDay() % 6 == 0
}

const datesAreEqual = (dateA, dateB) => {
    return dateA.toDateString() === dateB.toDateString()
}

const Month = ({month}) => {
    return (
        <div 
            className="flex justify-center items-center bg-white text-stone-500">
            {month}
        </div>
    )
}

const Day = ({date, dayOfMonth, isWeekend, isToday, appointments}) => {
    return (
        <div 
            className={
                clsx(
                "flex flex-col items-center gap-[1px] text-stone-500/80 text-xs truncate",
                    isWeekend && "bg-blue-100",
                    dayOfMonth && !isWeekend && "bg-white",
                    isToday && "bg-yellow-200",
                    dayOfMonth && "hover:cursor-pointer hover:bg-opacity-50"
            )}
            //is null if not a date
            onClick={() => date && alert(date)}
        >
            {dayOfMonth}
            {appointments.length != 0 && 
                    appointments.map(appointment => {
                        return (
                            <Appointment 
                                key={uuidv4()}
                                appointment={appointment}
                            />
                        )
                    })
            }
        </div>
    )
}

const Appointment = ({appointment}) => {
    return (
        <div
            className={clsx("text-white w-full", appointment.length == 1 && "rounded-full pl-1")}
            style={{backgroundColor: appointment.color}}
        >
            {appointment.title}
        </div>
    )
}


export default Calender

