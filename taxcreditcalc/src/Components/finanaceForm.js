import React, { Component } from 'react'
import { thisExpression } from '@babel/types';
import PropTypes from 'prop-types';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import * as firebase from 'firebase';
import { Dropdown } from 'semantic-ui-react'


export class finanaceForm extends Component {
    state = {
        monthlyWage: 0,
        monthlyRent: 0,
        dependents: 0,
        filingJointly: "",
        usState: "",
        population: 0,
        violent: 0

    }
    

    countryOptions = () => [
      { key: 'ABILENE, TEXAS', value: 'ABILENE, TEXAS', text: 'ABILENE, TEXAS' },
{ key: 'AKRON, OHIO', value: 'AKRON, OHIO', text: 'AKRON, OHIO' },
{ key: 'ALEXANDRIA, VIRGINIA', value: 'ALEXANDRIA, VIRGINIA', text: 'ALEXANDRIA, VIRGINIA' },
{ key: 'ALLEN, TEXAS', value: 'ALLEN, TEXAS', text: 'ALLEN, TEXAS' },
{ key: 'ALLENTOWN, PENNSYLVANIA', value: 'ALLENTOWN, PENNSYLVANIA', text: 'ALLENTOWN, PENNSYLVANIA' },
{ key: 'AMARILLO, TEXAS', value: 'AMARILLO, TEXAS', text: 'AMARILLO, TEXAS' },
{ key: 'AMHERST TOWN, NEW YORK', value: 'AMHERST TOWN, NEW YORK', text: 'AMHERST TOWN, NEW YORK' },
{ key: 'ANAHEIM, CALIFORNIA', value: 'ANAHEIM, CALIFORNIA', text: 'ANAHEIM, CALIFORNIA' },
{ key: 'ANCHORAGE, ALASKA', value: 'ANCHORAGE, ALASKA', text: 'ANCHORAGE, ALASKA' },
{ key: 'ANN ARBOR, MICHIGAN', value: 'ANN ARBOR, MICHIGAN', text: 'ANN ARBOR, MICHIGAN' },
{ key: 'ANTIOCH, CALIFORNIA', value: 'ANTIOCH, CALIFORNIA', text: 'ANTIOCH, CALIFORNIA' },
{ key: 'ARLINGTON, TEXAS', value: 'ARLINGTON, TEXAS', text: 'ARLINGTON, TEXAS' },
{ key: 'ATLANTA, GEORGIA', value: 'ATLANTA, GEORGIA', text: 'ATLANTA, GEORGIA' },
{ key: 'AURORA, COLORADO', value: 'AURORA, COLORADO', text: 'AURORA, COLORADO' },
{ key: 'AURORA, ILLINOIS', value: 'AURORA, ILLINOIS', text: 'AURORA, ILLINOIS' },
{ key: 'AUSTIN, TEXAS', value: 'AUSTIN, TEXAS', text: 'AUSTIN, TEXAS' },
{ key: 'BAKERSFIELD, CALIFORNIA', value: 'BAKERSFIELD, CALIFORNIA', text: 'BAKERSFIELD, CALIFORNIA' },
{ key: 'BALTIMORE, MARYLAND', value: 'BALTIMORE, MARYLAND', text: 'BALTIMORE, MARYLAND' },
{ key: 'BATON ROUGE, LOUISIANA', value: 'BATON ROUGE, LOUISIANA', text: 'BATON ROUGE, LOUISIANA' },
{ key: 'BEAUMONT, TEXAS', value: 'BEAUMONT, TEXAS', text: 'BEAUMONT, TEXAS' },
{ key: 'BELLEVUE, WASHINGTON', value: 'BELLEVUE, WASHINGTON', text: 'BELLEVUE, WASHINGTON' },
{ key: 'BERKELEY, CALIFORNIA', value: 'BERKELEY, CALIFORNIA', text: 'BERKELEY, CALIFORNIA' },
{ key: 'BILLINGS, MONTANA', value: 'BILLINGS, MONTANA', text: 'BILLINGS, MONTANA' },
{ key: 'BOISE, IDAHO', value: 'BOISE, IDAHO', text: 'BOISE, IDAHO' },
{ key: 'BRIDGEPORT, CONNECTICUT', value: 'BRIDGEPORT, CONNECTICUT', text: 'BRIDGEPORT, CONNECTICUT' },
{ key: 'BROKEN ARROW, OKLAHOMA', value: 'BROKEN ARROW, OKLAHOMA', text: 'BROKEN ARROW, OKLAHOMA' },
{ key: 'BUFFALO, NEW YORK', value: 'BUFFALO, NEW YORK', text: 'BUFFALO, NEW YORK' },
{ key: 'BURBANK, CALIFORNIA', value: 'BURBANK, CALIFORNIA', text: 'BURBANK, CALIFORNIA' },
{ key: 'CAMBRIDGE, MASSACHUSETTS', value: 'CAMBRIDGE, MASSACHUSETTS', text: 'CAMBRIDGE, MASSACHUSETTS' },
{ key: 'CAPE CORAL, FLORIDA', value: 'CAPE CORAL, FLORIDA', text: 'CAPE CORAL, FLORIDA' },
{ key: 'CARLSBAD, CALIFORNIA', value: 'CARLSBAD, CALIFORNIA', text: 'CARLSBAD, CALIFORNIA' },
{ key: 'CARROLLTON, TEXAS', value: 'CARROLLTON, TEXAS', text: 'CARROLLTON, TEXAS' },
{ key: 'CEDAR RAPIDS, IOWA', value: 'CEDAR RAPIDS, IOWA', text: 'CEDAR RAPIDS, IOWA' },
{ key: 'CENTENNIAL, COLORADO', value: 'CENTENNIAL, COLORADO', text: 'CENTENNIAL, COLORADO' },
{ key: 'CHANDLER, ARIZONA', value: 'CHANDLER, ARIZONA', text: 'CHANDLER, ARIZONA' },
{ key: 'CHARLESTON, SOUTH CAROLINA', value: 'CHARLESTON, SOUTH CAROLINA', text: 'CHARLESTON, SOUTH CAROLINA' },
{ key: 'CHATTANOOGA, TENNESSEE', value: 'CHATTANOOGA, TENNESSEE', text: 'CHATTANOOGA, TENNESSEE' },
{ key: 'CHESAPEAKE, VIRGINIA', value: 'CHESAPEAKE, VIRGINIA', text: 'CHESAPEAKE, VIRGINIA' },
{ key: 'CHICAGO, ILLINOIS', value: 'CHICAGO, ILLINOIS', text: 'CHICAGO, ILLINOIS' },
{ key: 'CHULA VISTA, CALIFORNIA', value: 'CHULA VISTA, CALIFORNIA', text: 'CHULA VISTA, CALIFORNIA' },
{ key: 'CINCINNATI, OHIO', value: 'CINCINNATI, OHIO', text: 'CINCINNATI, OHIO' },
{ key: 'CLARKSVILLE, TENNESSEE', value: 'CLARKSVILLE, TENNESSEE', text: 'CLARKSVILLE, TENNESSEE' },
{ key: 'CLEARWATER, FLORIDA', value: 'CLEARWATER, FLORIDA', text: 'CLEARWATER, FLORIDA' },
{ key: 'CLEVELAND, OHIO', value: 'CLEVELAND, OHIO', text: 'CLEVELAND, OHIO' },
{ key: 'CLINTON TOWNSHIP, MICHIGAN', value: 'CLINTON TOWNSHIP, MICHIGAN', text: 'CLINTON TOWNSHIP, MICHIGAN' },
{ key: 'CLOVIS, CALIFORNIA', value: 'CLOVIS, CALIFORNIA', text: 'CLOVIS, CALIFORNIA' },
{ key: 'COLLEGE STATION, TEXAS', value: 'COLLEGE STATION, TEXAS', text: 'COLLEGE STATION, TEXAS' },
{ key: 'COLORADO SPRINGS, COLORADO', value: 'COLORADO SPRINGS, COLORADO', text: 'COLORADO SPRINGS, COLORADO' },
{ key: 'COLUMBIA, MISSOURI', value: 'COLUMBIA, MISSOURI', text: 'COLUMBIA, MISSOURI' },
{ key: 'COLUMBUS GA, GEORGIA', value: 'COLUMBUS GA, GEORGIA', text: 'COLUMBUS GA, GEORGIA' },
{ key: 'COLUMBUS, OHIO', value: 'COLUMBUS, OHIO', text: 'COLUMBUS, OHIO' },
{ key: 'CONCORD, CALIFORNIA', value: 'CONCORD, CALIFORNIA', text: 'CONCORD, CALIFORNIA' },
{ key: 'CORAL SPRINGS, FLORIDA', value: 'CORAL SPRINGS, FLORIDA', text: 'CORAL SPRINGS, FLORIDA' },
{ key: 'CORONA, CALIFORNIA', value: 'CORONA, CALIFORNIA', text: 'CORONA, CALIFORNIA' },
{ key: 'CORPUS CHRISTI, TEXAS', value: 'CORPUS CHRISTI, TEXAS', text: 'CORPUS CHRISTI, TEXAS' },
{ key: 'COSTA MESA, CALIFORNIA', value: 'COSTA MESA, CALIFORNIA', text: 'COSTA MESA, CALIFORNIA' },
{ key: 'DALLAS, TEXAS', value: 'DALLAS, TEXAS', text: 'DALLAS, TEXAS' },
{ key: 'DALY CITY, CALIFORNIA', value: 'DALY CITY, CALIFORNIA', text: 'DALY CITY, CALIFORNIA' },
{ key: 'DAVENPORT, IOWA', value: 'DAVENPORT, IOWA', text: 'DAVENPORT, IOWA' },
{ key: 'DAVIE, FLORIDA', value: 'DAVIE, FLORIDA', text: 'DAVIE, FLORIDA' },
{ key: 'DAYTON, OHIO', value: 'DAYTON, OHIO', text: 'DAYTON, OHIO' },
{ key: 'DENTON, TEXAS', value: 'DENTON, TEXAS', text: 'DENTON, TEXAS' },
{ key: 'DENVER, COLORADO', value: 'DENVER, COLORADO', text: 'DENVER, COLORADO' },
{ key: 'DETROIT, MICHIGAN', value: 'DETROIT, MICHIGAN', text: 'DETROIT, MICHIGAN' },
{ key: 'DOWNEY, CALIFORNIA', value: 'DOWNEY, CALIFORNIA', text: 'DOWNEY, CALIFORNIA' },
{ key: 'EDISON TOWNSHIP, NEW JERSEY', value: 'EDISON TOWNSHIP, NEW JERSEY', text: 'EDISON TOWNSHIP, NEW JERSEY' },
{ key: 'EL CAJON, CALIFORNIA', value: 'EL CAJON, CALIFORNIA', text: 'EL CAJON, CALIFORNIA' },
{ key: 'EL MONTE, CALIFORNIA', value: 'EL MONTE, CALIFORNIA', text: 'EL MONTE, CALIFORNIA' },
{ key: 'EL PASO, TEXAS', value: 'EL PASO, TEXAS', text: 'EL PASO, TEXAS' },
{ key: 'ELGIN, ILLINOIS', value: 'ELGIN, ILLINOIS', text: 'ELGIN, ILLINOIS' },
{ key: 'ELIZABETH, NEW JERSEY', value: 'ELIZABETH, NEW JERSEY', text: 'ELIZABETH, NEW JERSEY' },
{ key: 'ELK GROVE, CALIFORNIA', value: 'ELK GROVE, CALIFORNIA', text: 'ELK GROVE, CALIFORNIA' },
{ key: 'ESCONDIDO, CALIFORNIA', value: 'ESCONDIDO, CALIFORNIA', text: 'ESCONDIDO, CALIFORNIA' },
{ key: 'EUGENE, OREGON', value: 'EUGENE, OREGON', text: 'EUGENE, OREGON' },
{ key: 'EVANSVILLE, INDIANA', value: 'EVANSVILLE, INDIANA', text: 'EVANSVILLE, INDIANA' },
{ key: 'EVERETT, WASHINGTON', value: 'EVERETT, WASHINGTON', text: 'EVERETT, WASHINGTON' },
{ key: 'FAIRFIELD, CALIFORNIA', value: 'FAIRFIELD, CALIFORNIA', text: 'FAIRFIELD, CALIFORNIA' },
{ key: 'FARGO, NORTH DAKOTA', value: 'FARGO, NORTH DAKOTA', text: 'FARGO, NORTH DAKOTA' },
{ key: 'FONTANA, CALIFORNIA', value: 'FONTANA, CALIFORNIA', text: 'FONTANA, CALIFORNIA' },
{ key: 'FORT COLLINS, COLORADO', value: 'FORT COLLINS, COLORADO', text: 'FORT COLLINS, COLORADO' },
{ key: 'FORT LAUDERDALE, FLORIDA', value: 'FORT LAUDERDALE, FLORIDA', text: 'FORT LAUDERDALE, FLORIDA' },
{ key: 'FORT WAYNE, INDIANA', value: 'FORT WAYNE, INDIANA', text: 'FORT WAYNE, INDIANA' },
{ key: 'FORT WORTH, TEXAS', value: 'FORT WORTH, TEXAS', text: 'FORT WORTH, TEXAS' },
{ key: 'FREMONT, CALIFORNIA', value: 'FREMONT, CALIFORNIA', text: 'FREMONT, CALIFORNIA' },
{ key: 'FRESNO, CALIFORNIA', value: 'FRESNO, CALIFORNIA', text: 'FRESNO, CALIFORNIA' },
{ key: 'FRISCO, TEXAS', value: 'FRISCO, TEXAS', text: 'FRISCO, TEXAS' },
{ key: 'FULLERTON, CALIFORNIA', value: 'FULLERTON, CALIFORNIA', text: 'FULLERTON, CALIFORNIA' },
{ key: 'GAINESVILLE, FLORIDA', value: 'GAINESVILLE, FLORIDA', text: 'GAINESVILLE, FLORIDA' },
{ key: 'GARDEN GROVE, CALIFORNIA', value: 'GARDEN GROVE, CALIFORNIA', text: 'GARDEN GROVE, CALIFORNIA' },
{ key: 'GARLAND, TEXAS', value: 'GARLAND, TEXAS', text: 'GARLAND, TEXAS' },
{ key: 'GILBERT, ARIZONA', value: 'GILBERT, ARIZONA', text: 'GILBERT, ARIZONA' },
{ key: 'GLENDALE AZ, ARIZONA', value: 'GLENDALE AZ, ARIZONA', text: 'GLENDALE AZ, ARIZONA' },
{ key: 'GLENDALE CA, CALIFORNIA', value: 'GLENDALE CA, CALIFORNIA', text: 'GLENDALE CA, CALIFORNIA' },
{ key: 'GRAND PRAIRIE, TEXAS', value: 'GRAND PRAIRIE, TEXAS', text: 'GRAND PRAIRIE, TEXAS' },
{ key: 'GRAND RAPIDS, MICHIGAN', value: 'GRAND RAPIDS, MICHIGAN', text: 'GRAND RAPIDS, MICHIGAN' },
{ key: 'GREELEY, COLORADO', value: 'GREELEY, COLORADO', text: 'GREELEY, COLORADO' },
{ key: 'GRESHAM, OREGON', value: 'GRESHAM, OREGON', text: 'GRESHAM, OREGON' },
{ key: 'HARTFORD, CONNECTICUT', value: 'HARTFORD, CONNECTICUT', text: 'HARTFORD, CONNECTICUT' },
{ key: 'HAYWARD, CALIFORNIA', value: 'HAYWARD, CALIFORNIA', text: 'HAYWARD, CALIFORNIA' },
{ key: 'HENDERSON, NEVADA', value: 'HENDERSON, NEVADA', text: 'HENDERSON, NEVADA' },
{ key: 'HIALEAH, FLORIDA', value: 'HIALEAH, FLORIDA', text: 'HIALEAH, FLORIDA' },
{ key: 'HILLSBORO, OREGON', value: 'HILLSBORO, OREGON', text: 'HILLSBORO, OREGON' },
{ key: 'HOLLYWOOD, FLORIDA', value: 'HOLLYWOOD, FLORIDA', text: 'HOLLYWOOD, FLORIDA' },
{ key: 'HONOLULU, HAWAII', value: 'HONOLULU, HAWAII', text: 'HONOLULU, HAWAII' },
{ key: 'HOUSTON, TEXAS', value: 'HOUSTON, TEXAS', text: 'HOUSTON, TEXAS' },
{ key: 'HUNTINGTON BEACH, CALIFORNIA', value: 'HUNTINGTON BEACH, CALIFORNIA', text: 'HUNTINGTON BEACH, CALIFORNIA' },
{ key: 'INDEPENDENCE, MISSOURI', value: 'INDEPENDENCE, MISSOURI', text: 'INDEPENDENCE, MISSOURI' },
{ key: 'INDIANAPOLIS, INDIANA', value: 'INDIANAPOLIS, INDIANA', text: 'INDIANAPOLIS, INDIANA' },
{ key: 'INGLEWOOD, CALIFORNIA', value: 'INGLEWOOD, CALIFORNIA', text: 'INGLEWOOD, CALIFORNIA' },
{ key: 'IRVINE, CALIFORNIA', value: 'IRVINE, CALIFORNIA', text: 'IRVINE, CALIFORNIA' },
{ key: 'IRVING, TEXAS', value: 'IRVING, TEXAS', text: 'IRVING, TEXAS' },
{ key: 'JACKSONVILLE, FLORIDA', value: 'JACKSONVILLE, FLORIDA', text: 'JACKSONVILLE, FLORIDA' },
{ key: 'JOLIET, ILLINOIS', value: 'JOLIET, ILLINOIS', text: 'JOLIET, ILLINOIS' },
{ key: 'JURUPA VALLEY, CALIFORNIA', value: 'JURUPA VALLEY, CALIFORNIA', text: 'JURUPA VALLEY, CALIFORNIA' },
{ key: 'KANSAS CITY, MISSOURI', value: 'KANSAS CITY, MISSOURI', text: 'KANSAS CITY, MISSOURI' },
{ key: 'KENT, WASHINGTON', value: 'KENT, WASHINGTON', text: 'KENT, WASHINGTON' },
{ key: 'KILLEEN, TEXAS', value: 'KILLEEN, TEXAS', text: 'KILLEEN, TEXAS' },
{ key: 'KNOXVILLE, TENNESSEE', value: 'KNOXVILLE, TENNESSEE', text: 'KNOXVILLE, TENNESSEE' },
{ key: 'LAFAYETTE, LOUISIANA', value: 'LAFAYETTE, LOUISIANA', text: 'LAFAYETTE, LOUISIANA' },
{ key: 'LAKELAND, FLORIDA', value: 'LAKELAND, FLORIDA', text: 'LAKELAND, FLORIDA' },
{ key: 'LAKEWOOD TOWNSHIP, NEW JERSEY', value: 'LAKEWOOD TOWNSHIP, NEW JERSEY', text: 'LAKEWOOD TOWNSHIP, NEW JERSEY' },
{ key: 'LANCASTER, CALIFORNIA', value: 'LANCASTER, CALIFORNIA', text: 'LANCASTER, CALIFORNIA' },
{ key: 'LANSING, MICHIGAN', value: 'LANSING, MICHIGAN', text: 'LANSING, MICHIGAN' },
{ key: 'LAREDO, TEXAS', value: 'LAREDO, TEXAS', text: 'LAREDO, TEXAS' },
{ key: 'LAS VEGAS METROPOLITAN POLICE DEPARTMENT, NEVADA', value: 'LAS VEGAS METROPOLITAN POLICE DEPARTMENT, NEVADA', text: 'LAS VEGAS METROPOLITAN POLICE DEPARTMENT, NEVADA' },
{ key: 'LEAGUE CITY, TEXAS', value: 'LEAGUE CITY, TEXAS', text: 'LEAGUE CITY, TEXAS' },
{ key: 'LEXINGTON, KENTUCKY', value: 'LEXINGTON, KENTUCKY', text: 'LEXINGTON, KENTUCKY' },
{ key: 'LITTLE ROCK, ARKANSAS', value: 'LITTLE ROCK, ARKANSAS', text: 'LITTLE ROCK, ARKANSAS' },
{ key: 'LONG BEACH, CALIFORNIA', value: 'LONG BEACH, CALIFORNIA', text: 'LONG BEACH, CALIFORNIA' },
{ key: 'LOS ANGELES, CALIFORNIA', value: 'LOS ANGELES, CALIFORNIA', text: 'LOS ANGELES, CALIFORNIA' },
{ key: 'LOWELL, MASSACHUSETTS', value: 'LOWELL, MASSACHUSETTS', text: 'LOWELL, MASSACHUSETTS' },
{ key: 'LUBBOCK, TEXAS', value: 'LUBBOCK, TEXAS', text: 'LUBBOCK, TEXAS' },
{ key: 'MADI+B1:B261SON, WISCONSIN', value: 'MADI+B1:B261SON, WISCONSIN', text: 'MADI+B1:B261SON, WISCONSIN' },
{ key: 'MADISON, WISCONSIN', value: 'MADISON, WISCONSIN', text: 'MADISON, WISCONSIN' },
{ key: 'MANCHESTER, NEW HAMPSHIRE', value: 'MANCHESTER, NEW HAMPSHIRE', text: 'MANCHESTER, NEW HAMPSHIRE' },
{ key: 'MCALLEN, TEXAS', value: 'MCALLEN, TEXAS', text: 'MCALLEN, TEXAS' },
{ key: 'MCKINNEY, TEXAS', value: 'MCKINNEY, TEXAS', text: 'MCKINNEY, TEXAS' },
{ key: 'MEMPHIS, TENNESSEE', value: 'MEMPHIS, TENNESSEE', text: 'MEMPHIS, TENNESSEE' },
{ key: 'MESA, ARIZONA', value: 'MESA, ARIZONA', text: 'MESA, ARIZONA' },
{ key: 'MESQUITE, TEXAS', value: 'MESQUITE, TEXAS', text: 'MESQUITE, TEXAS' },
{ key: 'MIAMI, FLORIDA', value: 'MIAMI, FLORIDA', text: 'MIAMI, FLORIDA' },
{ key: 'MIAMI GARDENS, FLORIDA', value: 'MIAMI GARDENS, FLORIDA', text: 'MIAMI GARDENS, FLORIDA' },
{ key: 'MIDLAND, TEXAS', value: 'MIDLAND, TEXAS', text: 'MIDLAND, TEXAS' },
{ key: 'MINNEAPOLIS, MINNESOTA', value: 'MINNEAPOLIS, MINNESOTA', text: 'MINNEAPOLIS, MINNESOTA' },
{ key: 'MIRAMAR, FLORIDA', value: 'MIRAMAR, FLORIDA', text: 'MIRAMAR, FLORIDA' },
{ key: 'MODESTO, CALIFORNIA', value: 'MODESTO, CALIFORNIA', text: 'MODESTO, CALIFORNIA' },
{ key: 'MORENO VALLEY, CALIFORNIA', value: 'MORENO VALLEY, CALIFORNIA', text: 'MORENO VALLEY, CALIFORNIA' },
{ key: 'MURFREESBORO, TENNESSEE', value: 'MURFREESBORO, TENNESSEE', text: 'MURFREESBORO, TENNESSEE' },
{ key: 'MURRIETA, CALIFORNIA', value: 'MURRIETA, CALIFORNIA', text: 'MURRIETA, CALIFORNIA' },
{ key: 'NAPERVILLE, ILLINOIS', value: 'NAPERVILLE, ILLINOIS', text: 'NAPERVILLE, ILLINOIS' },
{ key: 'NASHVILLE METROPOLITAN, TENNESSEE', value: 'NASHVILLE METROPOLITAN, TENNESSEE', text: 'NASHVILLE METROPOLITAN, TENNESSEE' },
{ key: 'NEWARK, NEW JERSEY', value: 'NEWARK, NEW JERSEY', text: 'NEWARK, NEW JERSEY' },
{ key: 'NEWPORT NEWS , VIRGINIA', value: 'NEWPORT NEWS , VIRGINIA', text: 'NEWPORT NEWS , VIRGINIA' },
{ key: 'NORFOLK, VIRGINIA', value: 'NORFOLK, VIRGINIA', text: 'NORFOLK, VIRGINIA' },
{ key: 'NORMAN, OKLAHOMA', value: 'NORMAN, OKLAHOMA', text: 'NORMAN, OKLAHOMA' },
{ key: 'NORTH LAS VEGAS, NEVADA', value: 'NORTH LAS VEGAS, NEVADA', text: 'NORTH LAS VEGAS, NEVADA' },
{ key: 'NORWALK, CALIFORNIA', value: 'NORWALK, CALIFORNIA', text: 'NORWALK, CALIFORNIA' },
{ key: 'OAKLAND, CALIFORNIA', value: 'OAKLAND, CALIFORNIA', text: 'OAKLAND, CALIFORNIA' },
{ key: 'OCEANSIDE, CALIFORNIA', value: 'OCEANSIDE, CALIFORNIA', text: 'OCEANSIDE, CALIFORNIA' },
{ key: 'ODESSA, TEXAS', value: 'ODESSA, TEXAS', text: 'ODESSA, TEXAS' },
{ key: 'OKLAHOMA CITY, OKLAHOMA', value: 'OKLAHOMA CITY, OKLAHOMA', text: 'OKLAHOMA CITY, OKLAHOMA' },
{ key: 'OLATHE, KANSAS', value: 'OLATHE, KANSAS', text: 'OLATHE, KANSAS' },
{ key: 'ONTARIO, CALIFORNIA', value: 'ONTARIO, CALIFORNIA', text: 'ONTARIO, CALIFORNIA' },
{ key: 'ORANGE, CALIFORNIA', value: 'ORANGE, CALIFORNIA', text: 'ORANGE, CALIFORNIA' },
{ key: 'ORLANDO, FLORIDA', value: 'ORLANDO, FLORIDA', text: 'ORLANDO, FLORIDA' },
{ key: 'OVERLAND PARK, KANSAS', value: 'OVERLAND PARK, KANSAS', text: 'OVERLAND PARK, KANSAS' },
{ key: 'OXNARD, CALIFORNIA', value: 'OXNARD, CALIFORNIA', text: 'OXNARD, CALIFORNIA' },
{ key: 'PALM BAY, FLORIDA', value: 'PALM BAY, FLORIDA', text: 'PALM BAY, FLORIDA' },
{ key: 'PALMDALE, CALIFORNIA', value: 'PALMDALE, CALIFORNIA', text: 'PALMDALE, CALIFORNIA' },
{ key: 'PASADENA, CALIFORNIA', value: 'PASADENA, CALIFORNIA', text: 'PASADENA, CALIFORNIA' },
{ key: 'PATERSON, NEW JERSEY', value: 'PATERSON, NEW JERSEY', text: 'PATERSON, NEW JERSEY' },
{ key: 'PEMBROKE PINES, FLORIDA', value: 'PEMBROKE PINES, FLORIDA', text: 'PEMBROKE PINES, FLORIDA' },
{ key: 'PEORIA, ARIZONA', value: 'PEORIA, ARIZONA', text: 'PEORIA, ARIZONA' },
{ key: 'PEORIA, ILLINOIS', value: 'PEORIA, ILLINOIS', text: 'PEORIA, ILLINOIS' },
{ key: 'PHILADELPHIA, PENNSYLVANIA', value: 'PHILADELPHIA, PENNSYLVANIA', text: 'PHILADELPHIA, PENNSYLVANIA' },
{ key: 'POMONA, CALIFORNIA', value: 'POMONA, CALIFORNIA', text: 'POMONA, CALIFORNIA' },
{ key: 'POMPANO BEACH, FLORIDA', value: 'POMPANO BEACH, FLORIDA', text: 'POMPANO BEACH, FLORIDA' },
{ key: 'PORT ST LUCIE, FLORIDA', value: 'PORT ST LUCIE, FLORIDA', text: 'PORT ST LUCIE, FLORIDA' },
{ key: 'PORTLAND, OREGON', value: 'PORTLAND, OREGON', text: 'PORTLAND, OREGON' },
{ key: 'PROVIDENCE, RHODE ISLAND', value: 'PROVIDENCE, RHODE ISLAND', text: 'PROVIDENCE, RHODE ISLAND' },
{ key: 'PUEBLO, COLORADO', value: 'PUEBLO, COLORADO', text: 'PUEBLO, COLORADO' },
{ key: 'RANCHO CUCAMONGA, CALIFORNIA', value: 'RANCHO CUCAMONGA, CALIFORNIA', text: 'RANCHO CUCAMONGA, CALIFORNIA' },
{ key: 'RENO, NEVADA', value: 'RENO, NEVADA', text: 'RENO, NEVADA' },
{ key: 'RENTON, WASHINGTON', value: 'RENTON, WASHINGTON', text: 'RENTON, WASHINGTON' },
{ key: 'RIALTO, CALIFORNIA', value: 'RIALTO, CALIFORNIA', text: 'RIALTO, CALIFORNIA' },
{ key: 'RICHARDSON, TEXAS', value: 'RICHARDSON, TEXAS', text: 'RICHARDSON, TEXAS' },
{ key: 'RICHMOND, CALIFORNIA', value: 'RICHMOND, CALIFORNIA', text: 'RICHMOND, CALIFORNIA' },
{ key: 'RIVERSIDE, CALIFORNIA', value: 'RIVERSIDE, CALIFORNIA', text: 'RIVERSIDE, CALIFORNIA' },
{ key: 'ROANOKE, VIRGINIA', value: 'ROANOKE, VIRGINIA', text: 'ROANOKE, VIRGINIA' },
{ key: 'ROCHESTER MN, MINNESOTA', value: 'ROCHESTER MN, MINNESOTA', text: 'ROCHESTER MN, MINNESOTA' },
{ key: 'ROCHESTER NY, NEW YORK', value: 'ROCHESTER NY, NEW YORK', text: 'ROCHESTER NY, NEW YORK' },
{ key: 'ROCKFORD, ILLINOIS', value: 'ROCKFORD, ILLINOIS', text: 'ROCKFORD, ILLINOIS' },
{ key: 'ROSEVILLE, CALIFORNIA', value: 'ROSEVILLE, CALIFORNIA', text: 'ROSEVILLE, CALIFORNIA' },
{ key: 'ROUND ROCK, TEXAS', value: 'ROUND ROCK, TEXAS', text: 'ROUND ROCK, TEXAS' },
{ key: 'SACRAMENTO, CALIFORNIA', value: 'SACRAMENTO, CALIFORNIA', text: 'SACRAMENTO, CALIFORNIA' },
{ key: 'SALEM, OREGON', value: 'SALEM, OREGON', text: 'SALEM, OREGON' },
{ key: 'SALINAS, CALIFORNIA', value: 'SALINAS, CALIFORNIA', text: 'SALINAS, CALIFORNIA' },
{ key: 'SALT LAKE CITY, UTAH', value: 'SALT LAKE CITY, UTAH', text: 'SALT LAKE CITY, UTAH' },
{ key: 'SAN ANTONIO, TEXAS', value: 'SAN ANTONIO, TEXAS', text: 'SAN ANTONIO, TEXAS' },
{ key: 'SAN BERNARDINO, CALIFORNIA', value: 'SAN BERNARDINO, CALIFORNIA', text: 'SAN BERNARDINO, CALIFORNIA' },
{ key: 'SAN DIEGO, CALIFORNIA', value: 'SAN DIEGO, CALIFORNIA', text: 'SAN DIEGO, CALIFORNIA' },
{ key: 'SAN FRANCISCO, CALIFORNIA', value: 'SAN FRANCISCO, CALIFORNIA', text: 'SAN FRANCISCO, CALIFORNIA' },
{ key: 'SAN JOSE, CALIFORNIA', value: 'SAN JOSE, CALIFORNIA', text: 'SAN JOSE, CALIFORNIA' },
{ key: 'SAN MATEO, CALIFORNIA', value: 'SAN MATEO, CALIFORNIA', text: 'SAN MATEO, CALIFORNIA' },
{ key: 'SANDY SPRINGS, GEORGIA', value: 'SANDY SPRINGS, GEORGIA', text: 'SANDY SPRINGS, GEORGIA' },
{ key: 'SANTA ANA, CALIFORNIA', value: 'SANTA ANA, CALIFORNIA', text: 'SANTA ANA, CALIFORNIA' },
{ key: 'SANTA CLARA, CALIFORNIA', value: 'SANTA CLARA, CALIFORNIA', text: 'SANTA CLARA, CALIFORNIA' },
{ key: 'SANTA CLARITA, CALIFORNIA', value: 'SANTA CLARITA, CALIFORNIA', text: 'SANTA CLARITA, CALIFORNIA' },
{ key: 'SANTA MARIA, CALIFORNIA', value: 'SANTA MARIA, CALIFORNIA', text: 'SANTA MARIA, CALIFORNIA' },
{ key: 'SANTA ROSA, CALIFORNIA', value: 'SANTA ROSA, CALIFORNIA', text: 'SANTA ROSA, CALIFORNIA' },
{ key: 'SAVANNAH-CHATHAM METROPOLITAN, GEORGIA', value: 'SAVANNAH-CHATHAM METROPOLITAN, GEORGIA', text: 'SAVANNAH-CHATHAM METROPOLITAN, GEORGIA' },
{ key: 'SCOTTSDALE, ARIZONA', value: 'SCOTTSDALE, ARIZONA', text: 'SCOTTSDALE, ARIZONA' },
{ key: 'SEATTLE, WASHINGTON', value: 'SEATTLE, WASHINGTON', text: 'SEATTLE, WASHINGTON' },
{ key: 'SHREVEPORT, LOUISIANA', value: 'SHREVEPORT, LOUISIANA', text: 'SHREVEPORT, LOUISIANA' },
{ key: 'SIMI VALLEY, CALIFORNIA', value: 'SIMI VALLEY, CALIFORNIA', text: 'SIMI VALLEY, CALIFORNIA' },
{ key: 'SIOUX FALLS, SOUTH DAKOTA', value: 'SIOUX FALLS, SOUTH DAKOTA', text: 'SIOUX FALLS, SOUTH DAKOTA' },
{ key: 'SOUTH BEND, INDIANA', value: 'SOUTH BEND, INDIANA', text: 'SOUTH BEND, INDIANA' },
{ key: 'SPOKANE, WASHINGTON', value: 'SPOKANE, WASHINGTON', text: 'SPOKANE, WASHINGTON' },
{ key: 'SPRINGFIELD IL, ILLINOIS', value: 'SPRINGFIELD IL, ILLINOIS', text: 'SPRINGFIELD IL, ILLINOIS' },
{ key: 'SPRINGFIELD MA, MASSACHUSETTS', value: 'SPRINGFIELD MA, MASSACHUSETTS', text: 'SPRINGFIELD MA, MASSACHUSETTS' },
{ key: 'SPRINGFIELD MI, MISSOURI', value: 'SPRINGFIELD MI, MISSOURI', text: 'SPRINGFIELD MI, MISSOURI' },
{ key: 'ST LOUIS, MISSOURI', value: 'ST LOUIS, MISSOURI', text: 'ST LOUIS, MISSOURI' },
{ key: 'ST PAUL, MINNESOTA', value: 'ST PAUL, MINNESOTA', text: 'ST PAUL, MINNESOTA' },
{ key: 'ST PETERSBURG, FLORIDA', value: 'ST PETERSBURG, FLORIDA', text: 'ST PETERSBURG, FLORIDA' },
{ key: 'STAMFORD, CONNECTICUT', value: 'STAMFORD, CONNECTICUT', text: 'STAMFORD, CONNECTICUT' },
{ key: 'STERLING HEIGHTS, MICHIGAN', value: 'STERLING HEIGHTS, MICHIGAN', text: 'STERLING HEIGHTS, MICHIGAN' },
{ key: 'STOCKTON, CALIFORNIA', value: 'STOCKTON, CALIFORNIA', text: 'STOCKTON, CALIFORNIA' },
{ key: 'SUNNYVALE, CALIFORNIA', value: 'SUNNYVALE, CALIFORNIA', text: 'SUNNYVALE, CALIFORNIA' },
{ key: 'SURPRISE, ARIZONA', value: 'SURPRISE, ARIZONA', text: 'SURPRISE, ARIZONA' },
{ key: 'SYRACUSE, NEW YORK', value: 'SYRACUSE, NEW YORK', text: 'SYRACUSE, NEW YORK' },
{ key: 'TACOMA, WASHINGTON', value: 'TACOMA, WASHINGTON', text: 'TACOMA, WASHINGTON' },
{ key: 'TALLAHASSEE, FLORIDA', value: 'TALLAHASSEE, FLORIDA', text: 'TALLAHASSEE, FLORIDA' },
{ key: 'TAMPA, FLORIDA', value: 'TAMPA, FLORIDA', text: 'TAMPA, FLORIDA' },
{ key: 'TEMECULA, CALIFORNIA', value: 'TEMECULA, CALIFORNIA', text: 'TEMECULA, CALIFORNIA' },
{ key: 'TEMPE, ARIZONA', value: 'TEMPE, ARIZONA', text: 'TEMPE, ARIZONA' },
{ key: 'THOUSAND OAKS, CALIFORNIA', value: 'THOUSAND OAKS, CALIFORNIA', text: 'THOUSAND OAKS, CALIFORNIA' },
{ key: 'TOLEDO, OHIO', value: 'TOLEDO, OHIO', text: 'TOLEDO, OHIO' },
{ key: 'TOPEKA, KANSAS', value: 'TOPEKA, KANSAS', text: 'TOPEKA, KANSAS' },
{ key: 'TORRANCE, CALIFORNIA', value: 'TORRANCE, CALIFORNIA', text: 'TORRANCE, CALIFORNIA' },
{ key: 'TUCSON, ARIZONA', value: 'TUCSON, ARIZONA', text: 'TUCSON, ARIZONA' },
{ key: 'TULSA, OKLAHOMA', value: 'TULSA, OKLAHOMA', text: 'TULSA, OKLAHOMA' },
{ key: 'VALLEJO, CALIFORNIA', value: 'VALLEJO, CALIFORNIA', text: 'VALLEJO, CALIFORNIA' },
{ key: 'VANCOUVER, WASHINGTON', value: 'VANCOUVER, WASHINGTON', text: 'VANCOUVER, WASHINGTON' },
{ key: 'VENTURA, CALIFORNIA', value: 'VENTURA, CALIFORNIA', text: 'VENTURA, CALIFORNIA' },
{ key: 'VICTORVILLE, CALIFORNIA', value: 'VICTORVILLE, CALIFORNIA', text: 'VICTORVILLE, CALIFORNIA' },
{ key: 'VIRGINIA BEACH, VIRGINIA', value: 'VIRGINIA BEACH, VIRGINIA', text: 'VIRGINIA BEACH, VIRGINIA' },
{ key: 'VISALIA, CALIFORNIA', value: 'VISALIA, CALIFORNIA', text: 'VISALIA, CALIFORNIA' },
{ key: 'VISTA, CALIFORNIA', value: 'VISTA, CALIFORNIA', text: 'VISTA, CALIFORNIA' },
{ key: 'WARREN, MICHIGAN', value: 'WARREN, MICHIGAN', text: 'WARREN, MICHIGAN' },
{ key: 'WATERBURY, CONNECTICUT', value: 'WATERBURY, CONNECTICUT', text: 'WATERBURY, CONNECTICUT' },
{ key: 'WEST COVINA, CALIFORNIA', value: 'WEST COVINA, CALIFORNIA', text: 'WEST COVINA, CALIFORNIA' },
{ key: 'WEST JORDAN, UTAH', value: 'WEST JORDAN, UTAH', text: 'WEST JORDAN, UTAH' },
{ key: 'WEST PALM BEACH, FLORIDA', value: 'WEST PALM BEACH, FLORIDA', text: 'WEST PALM BEACH, FLORIDA' },
{ key: 'WEST VALLEY, UTAH', value: 'WEST VALLEY, UTAH', text: 'WEST VALLEY, UTAH' },
{ key: 'WESTMINSTER, COLORADO', value: 'WESTMINSTER, COLORADO', text: 'WESTMINSTER, COLORADO' },
{ key: 'WICHITA, KANSAS', value: 'WICHITA, KANSAS', text: 'WICHITA, KANSAS' },
{ key: 'WICHITA FALLS, TEXAS', value: 'WICHITA FALLS, TEXAS', text: 'WICHITA FALLS, TEXAS' },
{ key: 'WOODBRIDGE TOWNSHIP, NEW JERSEY', value: 'WOODBRIDGE TOWNSHIP, NEW JERSEY', text: 'WOODBRIDGE TOWNSHIP, NEW JERSEY' },
{ key: 'WORCESTER, MASSACHUSETTS', value: 'WORCESTER, MASSACHUSETTS', text: 'WORCESTER, MASSACHUSETTS' },
{ key: 'YONKERS, NEW YORK', value: 'YONKERS, NEW YORK', text: 'YONKERS, NEW YORK' }

    ]
  

    onSubmit = (e) => {
        e.preventDefault();
        this.props.result(this.state.monthlyWage, this.state.monthlyRent);
        this.props.dependent(this.state.dependents);
        this.props.filing(this.state.filingJointly);
        if(this.state.usState != "") {
          const rootRef = firebase.database().ref().child(this.state.usState);
          rootRef.child("Population").on('value', snap => {
            this.props.setPopulation(parseFloat(snap.val()));
          })
          rootRef.child("Violent").on('value', snap => {
            this.props.setViolent(parseFloat(snap.val()));
          })
          }
    }

    setWage = (e) => this.setState({monthlyWage: e.target.value})
    setRent = (e) => this.setState({monthlyRent: e.target.value})
    setDependents = (e) => this.setState({dependents: e.target.value})

    handleCheckClick = (e) => {
      this.setState({filingJointly: e.target.value})
    }

    componentDidMount() {
    
    }

    handleDropDown = (e, { value }) => {
      this.setState({usState: value})
    }

  

    render() {
        return (
          <React.Fragment>  

            <font face="Times New Roman">
<br></br><br></br>
<center><h1>
  Housing Subsidy Calculator
  <br></br>
  </h1></center>
            <h2 style={{marginLeft: "5%",marginRight: "20%"}}> The issue:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}><font size="+1">The housing inequality crisis refers to the increasing disparity in the quality of housing in the U.S. Quality of housing includes multiple aspects, including crime rate, quality of
 local schools, the amenities and the amount of air pollution.</font></p>
<h2 style={{marginLeft: "5%",marginRight: "30%"}}>  The solution:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1"> Our team believes that an effective solution to this issue is subsidized 
housing. This solution involves the government providing rent supplements to impoverished households.
 To avoid potential misuses of state funding, the rent supplements should be given directly to landlord
 s. For instance, a person with an extensive history of drug abuse might spend rent supplements on dru
 gs, and giving rent supplements directly to the landlord prevents this from occurring.</font> </p>

<h2 style={{marginLeft: "5%",marginRight: "30%"}}>  How the housing subsidy calculator contributes to the solution:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1">  A key challenge in providing subsidies is determining the correct amount of subsidy to allocate to each household. To address this challenge, our team developed a housing subsidy calculator, which allows individuals to check the amount of subsidy that th
ey should receive to guarantee a reasonable level of housing quality.</font> </p>

<h2 style={{marginLeft: "5%",marginRight: "30%"}}>How the housing subsidy calculator works:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1">The calculator takes five inputs from the user:
  <ol>
<li>Monthly wage</li>
<li>Monthly rent</li>
<li>Zip code</li>
<li>Number of dependents</li>
<li>Marital status</li></ol>
Using the wage and rent, the calculator computes a ratio that represents the proportion of an individual’s income that’s spent on housing. This ratio is then compared with the “ideal” ratio of 1/3, and the difference between these two ratios suggests the amount of subsidy that’s required. </font>
</p>

<br></br><br></br>
<center><h1>Instructions:</h1></center><br></br>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1"><ol>
<li>Type in your pre-tax monthly wage in the first input box below. </li>
[note: your monthly wage must be below $4,000 to qualify for housing subsidy]<br></br>
<br></br>
<li>Type in your monthly rent in the second box.</li>
<br></br>
<li>Type in your zip code; this will be used to factor the crime rate and mental health index into our calculation.</li>
<br></br>
<li>Type in the number of your dependents, including the number of your children and parents that you need to provide financial support for.</li>
<br></br>
<li>Select your marital status, click on the “submit” button if you’re unmarried.</li>
<br></br>
<li>If you’re married or divorced, enter the income of or financial support that you receive from the other person.</li>
</ol><br></br>
See the formula that this calculator uses here.</font>
</p></font>
<br></br><br></br><br></br>

            <form className="ui form" onSubmit={this.onSubmit} style={this.getFormStyle()}>
            <h1 style={{color: "white", marginLeft: "23%"}}>The Housing Subsidy Calculator</h1>
              <div className="field" >
                <div style={this.getFieldStyle()}>
                  <label style={{color: "white"}}>Monthly Wage</label>
                  <input type="number" name="wage" placeholder="Enter Monthly Wage" autoComplete="off" onChange={this.setWage}/>
                </div>
              </div>
              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label style={{color: "white"}}>Monthly Rent</label>
                  <input type="number" name="rent" placeholder="Enter Monthly Rent" autoComplete="off" onChange={this.setRent}/>
                </div>  
              </div>



            <div className="inline fields" >
                <h3 style={this.styles()}> Filing As: </h3>
                <label style={{color: "white", fontSize: "17px"}}><input type="radio" name="value" onChange={this.handleCheckClick} value="yes" checked={this.state.filingJointly === "yes"}/> Jointly </label>
                <label style={{color: "white", fontSize: "17px"}}><input type="radio" name="value" onChange={this.handleCheckClick} value="no" checked={this.state.filingJointly === "no"}/>  Single</label>
            </div>




              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label style={{color: "white", }}>Dependents</label>
                  <input type="number" name="rent" placeholder="Enter Dependends" onChange={this.setDependents}/>
                </div>  
              </div>
              <Dropdown
    placeholder='Select City'
    fluid
    search
    selection
    options={this.countryOptions()}
    onChange={this.handleDropDown}
    value={this.state.usState}
  />
  <br></br>
              <div style={this.getButtonStyle()}>
                <button className="ui button" type="submit" >Submit</button>
              </div>
       
          




  
          



  
            </form>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            
          </React.Fragment>
        )
    }

   styles = () => {
      return {
          width: 'auto',
          height: 'auto',
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          margin: '5px',
          color: 'white',
          marginLeft: "35%"
      }
  }

    getButtonStyle = () => {
      return {
        
        textAlign: "center"
      }
    }

    getFieldStyle = () => {
      return {
        width: "80%",
        left: "50%",
        margin: "auto",
        color: "#E1E1E1"
      }
    }

    getFormStyle = () => {
      return {
        marginRight: "auto",
        marginLeft: "auto",
        padding: "10px",
        maxWidth: "60%",
        background: "#B0D0D3",
        border: "solid",
        borderWidth: "8px",
        borderRadius: "10px",
        borderColor: "#F4AC45"
      }
    }
}

export default finanaceForm