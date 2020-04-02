import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faSlidersH, faBell, faCaretDown, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export class LandingPage extends Component{
    
    render(){
        return (
            <div className="landingPageContent">
                <LandingPageHeader />
                <div className="row">
                    <BudgetStatistics />

                    <div style={{
                        margin: "0vh 4vw"
                    }}>
                        <DailyProgress />
                        <Goals />
                    </div>

                    <div>
                        <MyBudget />
                        <Transactions />
                    </div>

                </div>
            </div>
        );
    }
    
}

export class LandingPageBackdrop extends Component{

    render(){
        return (
            <div className="landigPageBackdrop"></div>
        );
    }

}

export class LandingPageHeader extends Component{

    getFriends(){
        let friendsDir = 'images/friend';
        let friends = ['','',''];
        return friends.map((friend, index) => friendsDir + index + '.png');
    }

    render(){
        return (
            <div className="landingPageHeader row center-v">

                <div className="searchContainer row center-v">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder="Search"/>
                </div>

                <div className="friends row">
                    {
                        this.getFriends().map(
                            (friend, index) => <div className="friend" key={index}>
                            <img src={friend} alt={friend}/></div>)
                    }

                    <div className="friend"><img src="icons/add_friend.svg" alt="add_friend.svg"/></div>
                </div>

                <div className="action"><FontAwesomeIcon icon={faSlidersH}/></div>
                <div className="action"><FontAwesomeIcon icon={faBell}/></div>
            </div>
        );
    }
}

export class BudgetStatistics extends Component{

    getCurrentMonthLabel(){
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        let label = MONTHS[currentMonth] + ' ' + currentYear;
        return label;
    }

    render(){
        return (
            <div className="budgetStatistics">

                <div className="header row center-v">
                    <div className="heading">Budget Statistics</div>
                    <div className="fillParent"></div>
                    <div className="selector row center-v">
                        <div className="label">Months</div>
                        <div className="icon"><FontAwesomeIcon icon={faCaretDown}/></div>
                    </div>
                </div>

                <div className="card balanceInsights">
                    
                    {/* Menu icon */}
                    <div className="row reverse">
                        <div className="settings">
                            <FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/>
                        </div>
                    </div>

                    {/* Total Balance */}
                    <div className="textCenter totalBalance">
                        <div className="label">Total Balance</div>
                        <div className="value">$5045,00</div>
                    </div>

                    {/* Balance Details */}
                    <div className="row center-v balanceDetails">
                        <div>
                            <div className="period">{this.getCurrentMonthLabel()}</div>
                            <div className="label">Cost This Month</div>
                        </div>
                        <div className="fillParent"></div>
                        <div className="value">- $2,459,00</div>
                    </div>

                    {/* Daily Spend Category Chart */}
                    <DailySpendCategoryChart />

                </div>

            </div>
        );
    }

}

export class DailySpendCategoryChart extends Component{

    getBars(){
        let bars = [0,1,2,3];
        let lastIndex = bars.length - 1;
        let currentMonth = new Date().getMonth();
        let currentDate = new Date().getDate();
        bars = bars.map(bar => currentDate - bar);
        bars.reverse();
        

        return bars.map((bar, index) => {
            let label = MONTHS[currentMonth] + ' ' + bar;
            if(index === lastIndex){
                return (
                    <React.Fragment key={bar}>
                        {this.getBar(label)}
                    </React.Fragment>
                )
            }else{
                return (
                    <React.Fragment key={bar}>
                        {this.getBar(label)}
                        <div className="fillParent"></div>
                    </React.Fragment>
                );
            }
        });
    }

    getBar(label){
        return (
            <div className="bars">
                <div className="row alignAtBase">
                    <div className="greenBar"></div>
                    <div className="orangeBar"></div>
                </div>
                <div className="label textCenter">{label}</div>
            </div>
        );
    }

    render(){
        return (
            <div className="dailySpendCategoryChart">
                <div className="row alignAtBase">{this.getBars()}</div>
            </div>
        );
    }
}

export class DailyProgress extends Component{

    getCurrentDayLabel(){
        let currentDay = new Date().getDay();
        return DAYS[currentDay];
    }

    render(){
        return (
            <div className="dailyProgress">

                <div className="header row center-v">
                    <div className="heading">Daily Progress</div>
                    <div className="fillParent"></div>
                    <div className="selector row center-v">
                        <div className="label">Days</div>
                        <div className="icon"><FontAwesomeIcon icon={faCaretDown}/></div>
                    </div>
                </div>

                <div className="card dailySpendInsights">
                    <div className="cardTitle row center-v">
                        <div className="icon"><FontAwesomeIcon icon={faChevronLeft}/></div>
                        <div className="fillParent"></div>
                        <div className="heading">Monday</div>
                        <div className="fillParent"></div>
                        <div className="icon"><FontAwesomeIcon icon={faChevronRight}/></div>
                    </div>
                    <svg className="insight">
                        <circle className="parentCircle" cx="11.9vw" cy="9.15vh" r="4.5vw"></circle>
                        <circle className="parentInnerCircle" cx="11.9vw" cy="9.15vh" r="3vw"></circle>
                        <circle className="categ1" cx="16.55vw" cy="5.65vh" r="1.6vw"></circle>
                        <circle className="categ2" cx="6.5vw" cy="10.45vh" r="1.6vw"></circle>
                        <text x="16vw" y="6.25vh">20%</text>
                        <text x="5.8vw" y="11vh">60%</text>
                    </svg>

                    <div className="spend row center-v">
                        <div className="icon"><FontAwesomeIcon icon={faCircle}/></div>
                        <div className="label">Rubber Duck</div>
                        <div className="fillParent"></div>
                        <div className="value">$&nbsp;58.90</div>
                    </div>
                    <div className="spend row center-v">
                        <div className="icon"><FontAwesomeIcon icon={faCircle}/></div>
                        <div className="label">Spider Costume</div>
                        <div className="fillParent"></div>
                        <div className="value">$&nbsp;74.00</div>
                    </div>

                </div>

            </div>
        );
    }

}

export class Goals extends Component{

    render(){
        return (
            <div className="goals">
                
                <div className="header row center-v">
                    <div className="heading">Goals</div>
                    <div className="fillParent"></div>
                    <div className="subheading">See All</div>
                </div>

                <div className="goal positionRelative">
                    <div className="backdrop positionRelative"></div>
                    <div className="row center-v positionAbsolute details">
                        
                        <div className="icon"><img src="icons/car.png" alt="car.png"/></div>
                        
                        <div className="priceDetails">
                            <div className="goalName">Car</div>
                            <div className="price">$5500,00</div>
                        </div>

                        <div className="fillParent"></div>

                        <div className="icon"><img src="icons/money-bag.svg" alt="money-bag"/></div>
                    </div>
                </div>

            </div>
        );
    }

}

export class MyBudget extends Component{

    render(){
        return (
            <div className="myBudget">
                <div className="secondaryBackdrop positionRelative"></div>
                <div className="backdrop positionRelative"></div>

                <div className="positionAbsolute">
                    <div className="dotsGrid row reverse">
                        <pre>
                            &bull; &bull;
                            <br></br>
                            &bull; &bull;
                        </pre>
                    </div>
                    <div className="heading textCenter">My Budget</div>
                    <div className="budget textCenter">$5045,00</div>
                    <div className="row center-h">
                        <div className="progress positionRelative"></div>
                    </div>
                </div>

                <div className="positionAbsolute headerIcon">
                    <img className="positionRelative" src="icons/coins.svg" alt="coins.svg"/>
                </div>

            </div>
        );
    }

}

export class Transactions extends Component{

    getTransactions(){
        let transactions = [0,1,2];
        let iconSrc = ["icons/supermarket.png", "images/friend1.png", "icons/diet.png"];
        let labels = ["Shopping", "Tom Wilson", "Food"];
        let categories = ["Mall", "Transactions", "Resto"];
        let amounts = ["- $2.00", "+ $13.00", "- $40.00"];
        let dayOfExpense = ["10 Oct", "13 Oct", "17 Oct"];

        return transactions.map(transaction => this.getTransaction(
            transaction, iconSrc[transaction], labels[transaction],
            categories[transaction], amounts[transaction],
            dayOfExpense[transaction]
        ));
    }

    getTransaction(transaction, icon, label, category, amount, dayOfExpense){
        return (
            <div className="transaction row center-v" key={transaction}>
                <div className="icon row center-h center-v"><img src={icon} alt={icon}/></div>
                <div className="categDetail">
                    <div className="label">{label}</div>
                    <div className="category">{category}</div>
                </div>
                <div className="fillParent"></div>
                <div className="spendDetail">
                    <div className="amount">{amount}</div>
                    <div className="timestamp">{dayOfExpense}</div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div className="transactions">
                
                <div className="header row center-v">
                    <div className="heading">Transactions</div>
                    <div className="fillParent"></div>
                    <div className="subheading">See All</div>
                </div>

                <React.Fragment>
                    {this.getTransactions()}
                </React.Fragment>

            </div>
        );
    }

}