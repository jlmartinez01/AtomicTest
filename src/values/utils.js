import { strings } from "./Strings";


export function _time_calculator(hora_creacion) {

    const [dateValues, timeValues] = hora_creacion.split(' ');

    const [year, mon, day] = dateValues.split('-');
    const [hour, min, sec] = timeValues.split(':');

    const a = new Date(+year, +mon - 1, +day, +hour, +min, +sec);

    const b = new Date();

    const minutes = diff_minutes(a, b);
    if (minutes < 60) {
        return minutes + 'min'
    }
    if (minutes > 60) {
        const horas = diff_hours(a, b);
        if (horas < 24) {
            return horas + 'hrs'
        }
        if (horas > 24) {
            const dias = diff_days(a, b);
            if (dias < 31) {
                return dias + 'd'
            }
            if (dias > 7) {
                const semanas = diff_weeks(a, b);
                return semanas + strings.Weeks

            }
        }
    }

}

function diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));

}

function diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

}

function diff_days(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));

}

function diff_weeks(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));

}

function diff_months(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));

}

function diff_years(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));

}
