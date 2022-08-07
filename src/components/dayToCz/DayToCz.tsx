import moment from "moment";

interface IDay {
    day: number;
}

const DayToCz = (day: IDay) => {
    const today = () => {
        switch (moment(day.day * 1000).format("dddd")) {
            case "Sunday":
                return "Neděle";

            case "Monday":
                return "Pondělí";

            case "Tuesday":
                return "Úterý";

            case "Wednesday":
                return "Středa";
            case "Thursday":
                return "Čtvrtek";

            case "Friday":
                return "Pátek";
            case "Saturday":
                return "Sobota";
        }
    };

    return <div>{today()}</div>;
};

export default DayToCz;
