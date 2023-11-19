import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../css/Faq.scss";

export default function Faq() {
    return (
        <>
        <Header/>
        <div className="faq__heading"><h1>FAQ - Frequently asked questions</h1></div>
            <div className="faq__content">
                <div className="faq_question">
                    <h2>Annual contribution amount</h2>
                    <p>
                        The standard amount of the annual allowance is CZK 8,000,
                        with monthly installments the amount is rounded up to CZK
                        7,800 (12 x CZK 650).
                    </p>
    
                    <p>
                        However, the amount does not represent the real annual cost
                        of living for children and the elderly. It is also possible
                        to contribute the full amount of NOK 16,000.
                    </p>
                </div>
                <div className="faq_question">
                    <h2>Will the donated money go directly to the sponsee?</h2>
                    <p>
                        We send funds to the accounts of umbrella institutions.
                        Institutions are subject to multiple financial controls and
                        audits.
                    </p>
    
                    <p>
                        <strong>
                            The children (or the institutions responsible for them)
                            receive 80% of the donations from the donors. The
                            remaining 20% ​​is used to cover the overhead costs
                            associated with the implementation of the project. MOST
                            ProTibet, o. p. s. expressly declares that these
                            overhead costs will not exceed 20% of the donated
                            amount.
                        </strong>
                    </p>
    
                    <p>
                        Finances are always sent to a specific institution in total.
                        That is that the institution will subsequently use the funds
                        to cover the costs of all the children together!! The
                        receiving institution must possess the so-called FCRA code,
                        which authorizes it to act as a charitable organization,
                        therefore it is also subject to checks, without this code we
                        do not send financial support, because the transfer costs
                        would be unnecessarily high.
                    </p>
                </div>
                <div className="faq_question">
                    <h2>
                        Can I correspond with the supported person and what can I
                        send?
                    </h2>
                    <p>
                        If you are writing your first letter, all you have to do is
                        write basic information about yourself, your family,
                        interests or work to the supported person in simple English.
                        You can send them your photos, they always bring the
                        greatest joy, because the child or senior can imagine who is
                        "on the other side".
                    </p>
    
                    <p>
                        You can attach views or stickers to the letters - i.e.
                        objects that fit in an A5 size envelope. The weight of the
                        letter should not exceed 200 grams and it should contain
                        only documentary content.
                    </p>
    
                    <p>
                        The envelope can be plain or handmade, it is important to
                        include the child's ID number = variable symbol and name!
                        Without it, we cannot match the letter correctly!
                    </p>
    
                    <p>
                        Most of the items that donors would like to send (such as
                        crayons, pencils, pads, candies, paper clips, toy cars) are
                        also available in India, and if you send many gifts, there
                        is a risk of confiscating the entire package with letters at
                        customs.
                    </p>
    
                    <p>
                        Before sending the letters to India, donors are notified by
                        email about the upcoming activity. It is therefore important
                        to always have an up-to-date email contact for the donor.
                    </p>
    
                    <p>
                        If the donor does not contact the supported person, the
                        children will not be obliged to write a letter to the donor.
                    </p>
                    <p>
                        You will receive a letter from the supported person 1-2
                        times a year. Younger children tend to draw in their letters
                        because their knowledge of English is weaker.
                    </p>
    
                    <p>
                        From us you will receive information about supported
                        locations, continuous updates and also a confirmation of the
                        donation provided, which you can use during the annual tax
                        settlement at work or when submitting a tax return for
                        deduction from the tax base.
                    </p>
                </div>
                <div className="faq_question">
                    <h2>Is there a verification of the use of the money sent?</h2>
                    <p>
                        From all the places we support, we receive an official
                        confirmation every year about the amount of money
                        transferred and the method and correctness of its use. All
                        foundations in India are subject to very strict control by
                        the tax office, which has the task of ensuring that the
                        money sent is used according to the agreed purpose -
                        charitable support of education or improving the living
                        conditions of the elderly.
                    </p>
    
                    <p>
                        Good contacts with representatives of monasteries and
                        representatives of the Tibetan government-in-exile are key
                        to the success of the project. Every year we visit all the
                        supported and check the use of the funds. Money for children
                        is intended for improving living conditions and for
                        education. The money is used to buy textbooks, notebooks,
                        other school supplies, but also food, clothes and medical
                        care is paid for. The cost of teacher salaries is also
                        partially covered to make education possible. Donations for
                        Tibetan seniors help to cover the basic needs of life – i.e.
                        food, medicine, medical care, clothing, heating for the
                        winter, the purchase of a blanket or mattress, and for them
                        essential oil for butter lamps for the altar.
                    </p>
    
                    <p>
                        Our work is transparent and so are our accounts. In the
                        contacts section, you can view the transparent accounts of
                        our organization.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}
