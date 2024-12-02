import React, { useState } from 'react';
import '../cssstyles/homepage.css'


/**
 * I generated all of this legalese of almost 50 paragraphs with chatgpt because it was hard to get the exact terms written by hand. 
 */

const Unsubscribe = () => {

    let index = 0;
    const [checked, setChecked] = useState(new Array(50).fill(false));
    const [enabled, setEnabled] = useState(false);

    const checkPassed = num => {
        setChecked(prevChecked => {
            const newChecked = [...prevChecked];
            newChecked[num] = true;
            return newChecked;
          });
      };
    
    const mainCheckPassed = () => {
        setEnabled(true);
    }



    return (
        <>
            <div className="text-holder">
                <h1>Unsubscription Services Terms and Services</h1>
                <p><b>Paragraph 1: Introduction to Subscription Cancellation</b><br/>
When you decide to terminate a subscription service, it's important to understand the terms outlined in the agreement. Legalese can often make this process more difficult, as it involves complex language. Subscription agreements typically contain clauses that explain the procedures and responsibilities for canceling a subscription, as well as any associated costs. Before you proceed with cancellation, ensure that you are fully aware of the consequences and the process involved, as failure to follow these terms may result in continued billing or other legal issues.</p>
                    {enabled && (
                            <div>
                            <input
                                type="checkbox"
                                checked={checked[0]}
                                onChange={() =>{ checkPassed(1); checkPassed(0)}}
                            />
                            I understand these terms and conditions and consent to take further any responsibilities of checking.
                            </div>
                        )}
<p><b>Paragraph 2: Understanding the Cancellation Procedure</b><br/>
The cancellation procedure is often outlined in the subscription agreement, and it's essential to read this section carefully. Many subscriptions require specific steps to be taken in order to officially cancel your service. This could include submitting a cancellation request online, sending an email, or contacting customer service. Understanding the method of cancellation is crucial to ensure that you are no longer billed after terminating the service. In some cases, you may also need to provide proof of your cancellation request.</p>
    {checked[0] && (
            <div>
              <input
                type="checkbox"
                checked={checked[1]}
                onChange={() => checkPassed(2)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 2)
            </div>
          )}
<p><b>Paragraph 3: Notice Period Requirements</b><br/>
Most subscription agreements include a notice period before your cancellation is processed. This means you must inform the service provider of your intention to cancel a certain number of days before your next billing cycle. Failure to comply with this notice period could result in being charged for the next period, even if you no longer want the service. For example, if the agreement requires a 30-day notice, you must submit your cancellation at least 30 days before the next renewal date to avoid further charges.</p>
{checked[1] && (
            <div>
              <input
                type="checkbox"
                checked={checked[2]}
                onChange={() => checkPassed(2)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 3)
            </div>
          )}
<p><b>Paragraph 4: Refund Policies Upon Cancellation</b><br/>
Refund policies for subscription cancellations vary between services. Some providers offer prorated refunds for unused portions of the service, while others may not offer any refunds once a subscription is canceled. It is essential to understand the refund policy as outlined in the agreement. Legalese in this section may use terms such as "non-refundable" or "prorated refund," which define how much money, if any, you are entitled to upon cancellation. Ensure that you are clear on the terms regarding refunds to avoid confusion later.</p>
{checked[2] && (
            <div>
              <input
                type="checkbox"
                checked={checked[3]}
                onChange={() => checkPassed(3)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 4)
            </div>
          )}
<p><b>Paragraph 5: Impact of Automatic Renewal Clauses</b><br/>
Many subscription services include automatic renewal clauses that automatically renew your subscription at the end of the term, often without notifying you in advance. These clauses are usually outlined in the agreement, and you must take specific action if you wish to opt-out of automatic renewal. If you don't cancel before the renewal date, you may be charged for another subscription period, even if you no longer want the service. It's essential to review your subscription agreement to see if such a clause is included and to cancel before the renewal date to avoid unexpected charges.</p>
{checked[3] && (
            <div>
              <input
                type="checkbox"
                checked={checked[4]}
                onChange={() => checkPassed(4)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 5)
            </div>
          )}
<p><b>Paragraph 6: Early Termination Fees</b><br/>
Subscription agreements sometimes include early termination fees (ETFs) for customers who decide to cancel before the end of the agreed-upon term. These fees are intended to compensate the service provider for the loss of future payments. Such clauses are often written in legalese with terms like "liquidated damages" or "early termination penalty." The amount of the ETF may vary depending on how much time is remaining in your subscription term. Be sure to review your agreement for any early termination clauses before proceeding with cancellation.</p>
{checked[4] && (
            <div>
              <input
                type="checkbox"
                checked={checked[5]}
                onChange={() => checkPassed(5)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 6)
            </div>
          )}
<p><b>Paragraph 7: Conditions for Service Suspension or Termination by the Provider</b><br/>
In addition to voluntary cancellation by the customer, the service provider may also reserve the right to suspend or terminate your subscription under certain conditions. These conditions are often outlined in the agreement and may include failure to pay, misuse of the service, or violation of terms and conditions. If the provider suspends or terminates the service, they may notify you in writing or through the account management portal. Make sure to understand these clauses, as they can affect your ability to use the service if you inadvertently violate the terms.</p>
{checked[5] && (
            <div>
              <input
                type="checkbox"
                checked={checked[6]}
                onChange={() => checkPassed(6)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 7)
            </div>
          )}
<p><b>Paragraph 8: Handling of Personal Data Upon Cancellation</b><br/>
Subscription services often collect personal data from users, including billing information, usage data, and other details. Upon canceling a subscription, it's important to understand how the service provider will handle your data. Some services may retain your data for legal or operational reasons, while others may offer to delete your information upon request. The privacy policy of the service usually outlines these terms. Understanding how your data is handled after cancellation is crucial to protect your privacy and prevent unauthorized use of your information.</p>
{checked[6] && (
            <div>
              <input
                type="checkbox"
                checked={checked[7]}
                onChange={() => checkPassed(7)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 8)
            </div>
          )}
<p><b>Paragraph 9: Legal Jurisdiction and Dispute Resolution</b><br/>
Many subscription agreements contain clauses specifying the legal jurisdiction where disputes will be resolved. These clauses are written in legalese and can affect your ability to pursue legal action in your home country. Instead, they may require disputes to be handled in a specific location, such as the service provider's headquarters or through an arbitration process. It's important to understand these terms, as they can affect your options for resolving any issues that arise during the cancellation process.</p>
{checked[7] && (
            <div>
              <input
                type="checkbox"
                checked={checked[8]}
                onChange={() => checkPassed(8)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 9)
            </div>
          )}
<p><b>Paragraph 10: The Importance of Following the Terms</b><br/>
Following the cancellation terms outlined in the subscription agreement is crucial to avoid unwanted fees or legal issues. If you fail to adhere to the notice period, refund policy, or other requirements, you could continue to be billed, face penalties, or lose access to services that you have already paid for. It's essential to thoroughly read the terms and ensure that you follow all steps outlined in the agreement for canceling the subscription. By doing so, you can avoid misunderstandings and protect yourself from unnecessary financial or legal consequences.</p>
{checked[8] && (
            <div>
              <input
                type="checkbox"
                checked={checked[9]}
                onChange={() => checkPassed(9)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 10)
            </div>
          )}
<p><b>Paragraph 11: Timing of Cancellation Requests</b><br/>
The timing of your cancellation request is vital. For example, many subscriptions are billed annually, but if you request to cancel just after the renewal date, you might still be charged for the entire year. Therefore, knowing the exact billing cycle and making your cancellation request before the renewal date is key. Make sure you allow sufficient time for the request to be processed to avoid the next charge. It's a good idea to set reminders or check the service provider’s terms regarding the deadline for cancellation.</p>
{checked[9] && (
            <div>
              <input
                type="checkbox"
                checked={checked[10]}
                onChange={() => checkPassed(10)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 11)
            </div>
          )}

<p><b>Paragraph 12: Service-Specific Terms and Conditions</b><br/>
Each subscription service may have unique terms and conditions for cancellation. These service-specific terms may vary widely from one company to another, and it's crucial to understand them in detail. Some services may offer different cancellation procedures for different account types or service packages. For instance, a basic subscription might have simpler cancellation terms than a premium package. Therefore, it's important to understand how the subscription you’re using works to avoid confusion during cancellation.</p>
{checked[10] && (
            <div>
              <input
                type="checkbox"
                checked={checked[11]}
                onChange={() => checkPassed(11)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 12)
            </div>
          )}
<p><b>Paragraph 13: Communication Methods for Cancellation</b><br/>
Effective communication with the service provider is key to a successful cancellation process. Some providers require a written request via email, while others may allow cancellations directly through their website or mobile app. In some cases, you may need to call customer service or submit a formal cancellation request. It is essential to ensure that you follow the correct procedure as outlined in the subscription agreement. Documentation of your request is also a good idea in case there are any disputes regarding the cancellation later on.</p>
{checked[11] && (
            <div>
              <input
                type="checkbox"
                checked={checked[12]}
                onChange={() => checkPassed(12)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 13)
            </div>
          )}
<p><b>Paragraph 14: Consequences of Not Cancelling in Time</b><br/>
Failing to cancel your subscription before the renewal date can lead to unwanted consequences. You may be charged for the next term even if you no longer want the service. This could result in additional financial burdens, especially if you did not intend to continue the subscription. Additionally, if the service is tied to automatic renewal clauses, you might find that you are locked into another period of service. Therefore, it’s important to cancel ahead of time to avoid being caught by automatic renewal systems.</p>
{checked[12] && (
            <div>
              <input
                type="checkbox"
                checked={checked[13]}
                onChange={() => checkPassed(13)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 14)
            </div>
          )}
<p><b>Paragraph 15: The Role of Subscription Management Tools</b><br/>
Many subscription services offer management tools that allow you to monitor, pause, or cancel subscriptions directly from your account dashboard. These tools can help you track your subscriptions and ensure that you're aware of renewal dates. Using these management tools can simplify the cancellation process. Make sure that the service provider offers an easy-to-use interface to handle cancellations, or else you might be left with a complicated process that requires additional effort on your part.</p>
{checked[13] && (
            <div>
              <input
                type="checkbox"
                checked={checked[14]}
                onChange={() => checkPassed(14)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 15)
            </div>
          )}
<p><b>Paragraph 16: Different Methods of Account Deactivation</b><br/>
Some services allow you to deactivate or temporarily suspend your account instead of outright canceling it. This may be useful if you want to pause the service for a while but do not want to lose your account or information. Account deactivation options are often described in the service’s terms and conditions. You should explore these options if you are unsure about whether you want to completely cancel the subscription. Make sure you understand whether account deactivation will stop charges or if you will continue to be billed during the suspension period.</p>
{checked[14] && (
            <div>
              <input
                type="checkbox"
                checked={checked[15]}
                onChange={() => checkPassed(15)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 16)
            </div>
          )}
<p><b>Paragraph 17: Handling Unused Subscription Periods</b><br/>
When canceling a subscription, many users wonder what happens to the remaining period. Depending on the terms of the agreement, you may be allowed to use the service until the next billing cycle, or your access may be immediately terminated. Services that provide prorated refunds often allow you to use the service for the remainder of the billing cycle and then provide a partial refund. If the subscription is non-refundable, however, you might lose access immediately after cancellation but still be charged for the entire term.</p>
{checked[15] && (
            <div>
              <input
                type="checkbox"
                checked={checked[16]}
                onChange={() => checkPassed(16)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 17)
            </div>
          )}
<p><b>Paragraph 18: Customer Service Interactions During Cancellation</b><br/>
The customer service experience can vary widely when trying to cancel a subscription. Some services have dedicated teams that make cancellations smooth and easy, while others may make the process difficult by requiring multiple steps or hours of phone calls. Knowing your rights and the cancellation process beforehand can help make this interaction more efficient. Always ask for a confirmation number or email to ensure that the cancellation request is properly documented in case of future disputes.</p>
{checked[16] && (
            <div>
              <input
                type="checkbox"
                checked={checked[17]}
                onChange={() => checkPassed(17)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 18)
            </div>
          )}
<p><b>Paragraph 19: Subscription Trial Periods and Cancellation</b><br/>
Many subscription services offer free trials or discounted initial periods to encourage users to sign up. If you are on a trial period, it's important to know when the trial ends and when you will start being charged. If you wish to cancel before the trial ends, make sure you do so according to the terms stated in the agreement. Trial periods often have strict cancellation guidelines, and missing the cancellation window could result in full charges once the trial period expires.</p>
{checked[17] && (
            <div>
              <input
                type="checkbox"
                checked={checked[18]}
                onChange={() => checkPassed(18)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 19)
            </div>
          )}
<p><b>Paragraph 20: Service Provider’s Right to Modify Cancellation Terms</b><br/>
In some cases, service providers may reserve the right to modify their cancellation policies at any time. This could involve changes to the notice period, fees, or the cancellation process itself. These modifications are typically communicated through updates to the terms and conditions, and users are expected to review these updates regularly. It's essential to be aware of any changes that may affect your ability to cancel or the terms surrounding your cancellation, as failure to comply with new terms could lead to unexpected charges.</p>
{checked[18] && (
            <div>
              <input
                type="checkbox"
                checked={checked[19]}
                onChange={() => checkPassed(19)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 20)
            </div>
          )}
<p><b>Paragraph 21: Cancellation Confirmation and Follow-Up</b><br/>
Once your cancellation request has been processed, it's important to receive confirmation from the service provider. This confirmation could be in the form of an email or a notification in your account. Always keep this confirmation for your records in case there are any issues later on. If you do not receive confirmation within a reasonable timeframe, follow up with customer service to ensure that your request has been processed. Tracking this confirmation will also serve as proof in case there are any disputes regarding the cancellation.</p>
{checked[19] && (
            <div>
              <input
                type="checkbox"
                checked={checked[20]}
                onChange={() => checkPassed(20)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 21)
            </div>
          )}
<p><b>Paragraph 22: Cancellation During a Promotional Offer</b><br/>
If you are subscribed to a promotional offer or discount, canceling the service before the offer expires could affect the benefits you've received. Some services might allow you to keep the discount until the end of the term, while others might revoke the promotional price if you cancel early. Review the terms of the offer to determine how it impacts your cancellation decision. It’s also a good idea to check if there are any additional charges associated with canceling during a promotional period.</p>
{checked[20] && (
            <div>
              <input
                type="checkbox"
                checked={checked[21]}
                onChange={() => checkPassed(21)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 22)
            </div>
          )}
<p><b>Paragraph 23: Dispute Resolution for Subscription Cancellations</b><br/>
If there is a dispute over a subscription cancellation, the resolution process is often outlined in the terms of the agreement. Many providers include an arbitration clause, which requires disputes to be resolved outside of court. You may be required to use a mediator or participate in arbitration sessions. Understanding the dispute resolution process before you cancel can save you time and effort if an issue arises. Always review the agreement to see how disputes will be handled in case the cancellation process does not go as planned.</p>
{checked[21] && (
            <div>
              <input
                type="checkbox"
                checked={checked[22]}
                onChange={() => checkPassed(22)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 23)
            </div>
          )}
<p><b>Paragraph 24: Potential Impact on Credit or Billing History</b><br/>
In some instances, failing to properly cancel a subscription could affect your credit or billing history. If the service provider reports outstanding charges to credit agencies, it could damage your credit score. To avoid this, ensure that you complete the cancellation process fully and on time. It is also a good idea to monitor your credit report for any signs of unexpected charges from canceled subscriptions.</p>
{checked[22] && (
            <div>
              <input
                type="checkbox"
                checked={checked[23]}
                onChange={() => checkPassed(23)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 24)
            </div>
          )}

<p><b>Paragraph 25: Consequences of Misunderstanding the Cancellation Terms</b><br/>
Misunderstanding the terms of cancellation can lead to significant financial and legal issues. For example, if the cancellation terms require a written request, but you only submit an email, the provider may not honor your request. Similarly, failing to follow the exact procedures for submitting a cancellation could result in continued billing. To avoid these consequences, make sure you read and fully understand the cancellation instructions outlined in the subscription agreement.</p>
{checked[23] && (
            <div>
              <input
                type="checkbox"
                checked={checked[24]}
                onChange={() => checkPassed(24)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 25)
            </div>
          )}
<p><b>Paragraph 26: The Importance of Keeping Records of Cancellation</b><br/>
When canceling a subscription, it's vital to keep detailed records of your cancellation request. This includes any confirmation emails, written notices, or customer service interactions related to the cancellation. Having these records on hand can help you resolve any issues that arise, such as unexpected charges or disputes about whether the subscription was canceled. Consider storing your cancellation confirmation in a secure place for future reference.</p>
{checked[24] && (
            <div>
              <input
                type="checkbox"
                checked={checked[25]}
                onChange={() => checkPassed(25)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 26)
            </div>
          )}
<p><b>Paragraph 27: Consequences of Not Reading the Terms Before Subscription</b><br/>
Failure to read the terms and conditions before subscribing to a service can result in unwanted surprises when trying to cancel later. Many subscriptions have automatic renewal clauses, minimum term requirements, or early termination fees that users may not be aware of. Reading the fine print before signing up can help you understand what you’re agreeing to and make it easier to cancel when the time comes without facing unexpected penalties or complications.</p>
{checked[25] && (
            <div>
              <input
                type="checkbox"
                checked={checked[26]}
                onChange={() => checkPassed(26)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 27)
            </div>
          )}
<p><b>Paragraph 28: The Role of Subscription Managers in Simplifying Cancellation</b><br/>
Subscription managers are tools or apps that help users manage multiple subscriptions in one place. These services can provide reminders about renewal dates and even help you cancel subscriptions directly from the app. Using a subscription manager can simplify the cancellation process by offering a one-stop solution to handle all your subscriptions. Consider using a subscription manager if you have multiple subscriptions to avoid missing cancellation deadlines.</p>
{checked[26] && (
            <div>
              <input
                type="checkbox"
                checked={checked[27]}
                onChange={() => checkPassed(27)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 28)
            </div>
          )}
<p><b>Paragraph 29: The Legalities of Subscription Refunds</b><br/>
Refunds for canceled subscriptions can vary based on the terms outlined in the agreement. Some services offer full refunds, while others provide only partial or prorated refunds for unused service time. Certain subscriptions may have a no-refund policy, which means that once paid, the amount is non-refundable. Understanding these refund policies before canceling can help you avoid confusion regarding your eligibility for a refund after the cancellation.</p>
{checked[27] && (
            <div>
              <input
                type="checkbox"
                checked={checked[28]}
                onChange={() => checkPassed(28)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 29)
            </div>
          )}
<p><b>Paragraph 30: Adjustments to Subscription Terms After Cancellation</b><br/>
In some cases, providers may adjust subscription terms after cancellation, especially if you are opting for a downgrade or temporary suspension instead of full cancellation. These adjustments might include a change in the service level, a reduction in features, or a change in pricing. Make sure to clarify these adjustments with the provider and understand how they affect your account or any remaining payments.</p>
{checked[28] && (
            <div>
              <input
                type="checkbox"
                checked={checked[29]}
                onChange={() => checkPassed(29)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 30)
            </div>
          )}
<p><b>Paragraph 31: Legal Implications of Ignoring Subscription Cancellation</b><br/>
Ignoring the need to cancel a subscription can have legal implications, especially if you continue to be charged despite requesting a cancellation. If you do not act to stop automatic renewals or pay attention to billing cycles, you could be held responsible for payments. Furthermore, your failure to cancel may be seen as a breach of the agreement, which could lead to further legal consequences. Therefore, it is crucial to cancel properly to avoid unwanted legal trouble.</p>
{checked[29] && (
            <div>
              <input
                type="checkbox"
                checked={checked[30]}
                onChange={() => checkPassed(30)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 31)
            </div>
          )}
<p><b>Paragraph 32: The Importance of Timely Cancellation to Avoid Unwanted Fees</b><br/>
Timely cancellation is essential to avoid unexpected fees or continued billing. Most subscription services have specific terms regarding when and how cancellations must be requested. If you miss this window, you may be charged for another billing cycle or even subject to additional penalties. To avoid unnecessary charges, it's important to take the time to understand your subscription's terms and act promptly.</p>
{checked[30] && (
            <div>
              <input
                type="checkbox"
                checked={checked[31]}
                onChange={() => checkPassed(31)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 32)
            </div>
          )}
<p><b>Paragraph 33: The Role of Written Confirmation in Cancellation</b><br/>
Written confirmation plays a key role in the cancellation process. When you request to cancel, always ask for written confirmation in the form of an email or document from the service provider. This helps ensure that both parties are clear about the cancellation and provides a record in case there is a future dispute about the cancellation date or charges.</p>
{checked[31] && (
            <div>
              <input
                type="checkbox"
                checked={checked[32]}
                onChange={() => checkPassed(32)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 33)
            </div>
          )}
<p><b>Paragraph 34: Subscription Providers’ Ability to Change Terms</b><br/>
Subscription providers often reserve the right to change the terms of service, including cancellation policies, at any time. These changes can affect your ability to cancel, the notice period required, or the fees associated with termination. Therefore, it's important to review any updates to the terms periodically and understand how those changes impact your subscription and cancellation rights.</p>
{checked[32] && (
            <div>
              <input
                type="checkbox"
                checked={checked[33]}
                onChange={() => checkPassed(33)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 34)
            </div>
          )}
<p><b>Paragraph 35: The Process of Cancelling Premium and Free Subscriptions</b><br/>
The process for canceling premium subscriptions may differ from free ones. Premium subscriptions often come with a set term and renewal clauses, whereas free subscriptions may not require a formal cancellation process. Understanding the differences in the cancellation process for both types can help you avoid confusion and ensure you are not charged after you no longer wish to continue the service.</p>
{checked[33] && (
            <div>
              <input
                type="checkbox"
                checked={checked[34]}
                onChange={() => checkPassed(34)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 35)
            </div>
          )}
<p><b>Paragraph 36: How to Deal with Subscription Services That Do Not Offer Easy Cancellation</b><br/>
Some subscription services are notorious for making it difficult to cancel, often requiring multiple steps or phone calls to customer service. If you find yourself in this situation, be persistent and keep detailed records of your interactions. If the cancellation process is overly complicated or opaque, consider reporting the issue to consumer protection agencies to address any unfair business practices.</p>
{checked[34] && (
            <div>
              <input
                type="checkbox"
                checked={checked[35]}
                onChange={() => checkPassed(35)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 36)
            </div>
          )}
<p><b>Paragraph 37: Impact of Subscription Cancellation on Service Access</b><br/>
Depending on the service, canceling your subscription may result in an immediate loss of access to the service, or it may continue until the next billing cycle. Understanding when your access will be terminated after cancellation is essential to avoid any interruption of service. If you rely on the service, make sure to plan ahead and consider any workarounds before cancellation becomes effective.</p>
{checked[35] && (
            <div>
              <input
                type="checkbox"
                checked={checked[36]}
                onChange={() => checkPassed(36)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 37)
            </div>
          )}
<p><b>Paragraph 38: Subscription Cancellation for Family or Shared Accounts</b><br/>
If you are part of a family or shared subscription plan, canceling the subscription may affect other users. In many cases, the primary account holder is responsible for managing the subscription, and terminating the service may disrupt access for others. Make sure to communicate with other users in the shared account and follow the proper process to ensure a smooth cancellation without impacting others unnecessarily.</p>
{checked[36] && (
            <div>
              <input
                type="checkbox"
                checked={checked[37]}
                onChange={() => checkPassed(37)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 38)
            </div>
          )}
<p><b>Paragraph 39: Cancelling Digital Subscriptions vs Physical Products</b><br/>
Digital subscriptions, such as streaming services, are generally easier to cancel than physical product subscriptions, such as subscription boxes. While digital subscriptions often involve simply logging into an account and clicking a cancel button, physical product subscriptions may require the return of items or contacting customer service. Be sure to check the terms for the type of subscription you are dealing with to understand the proper cancellation process.</p>
{checked[37] && (
            <div>
              <input
                type="checkbox"
                checked={checked[38]}
                onChange={() => checkPassed(38)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 39)
            </div>
          )}
<p><b>Paragraph 40: Handling Subscriptions You Forgot About</b><br/>
If you have forgotten about a subscription service that continues to bill you, it's important to take immediate action. Review your account history or bank statements to identify any ongoing subscriptions you no longer use or need. Once you identify them, follow the appropriate cancellation process outlined by the service provider. In some cases, you may also be entitled to refunds for any unused service periods if you act quickly.</p>
{checked[38] && (
            <div>
              <input
                type="checkbox"
                checked={checked[39]}
                onChange={() => checkPassed(39)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 40)
            </div>
          )}
<p><b>Paragraph 41: Subscription Terms for Promotional Offers and Discounts</b><br/>
When you sign up for a promotional offer or discount, the terms related to cancellation might differ from the standard subscription terms. In many cases, you may need to cancel before the promotional period ends to avoid being charged the full price for the service. Always read the fine print regarding promotional offers to ensure that you do not incur unexpected charges after the promotion expires.</p>
{checked[39] && (
            <div>
              <input
                type="checkbox"
                checked={checked[40]}
                onChange={() => checkPassed(40)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 41)
            </div>
          )}
<p><b>Paragraph 42: Subscription Cancellation and Gift Subscriptions</b><br/>
If you received a subscription as a gift, the cancellation process might be different than for a standard subscription. Some providers allow recipients to cancel or transfer the gift subscription, while others may require the gift giver to handle the cancellation. Review the service provider's gift subscription policy to ensure that you follow the correct procedure to cancel the gift subscription without issues.</p>
{checked[40] && (
            <div>
              <input
                type="checkbox"
                checked={checked[41]}
                onChange={() => checkPassed(41)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 42)
            </div>
          )}
<p><b>Paragraph 43: Potential for Service Downgrade Instead of Full Cancellation</b><br/>
If you're unsure whether you want to cancel a subscription entirely, some services allow you to downgrade to a lower-tier plan instead. This can be a good option if you still want access to the service but at a lower cost. Review the terms for downgrading your subscription to see if it meets your needs without the full commitment required by a higher-tier plan.</p>
{checked[41] && (
            <div>
              <input
                type="checkbox"
                checked={checked[42]}
                onChange={() => checkPassed(42)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 43)
            </div>
          )}
<p><b>Paragraph 44: Subscription Cancellation During Financial Hardship</b><br/>
In times of financial hardship, you may need to cancel subscriptions to reduce costs. Many subscription services offer special provisions for customers facing financial difficulties, including deferred payments or temporary suspension of services. If you find yourself in this situation, reach out to customer service to explore options for canceling or adjusting your subscription without facing penalties.</p>
{checked[42] && (
            <div>
              <input
                type="checkbox"
                checked={checked[43]}
                onChange={() => checkPassed(43)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 44)
            </div>
          )}
<p><b>Paragraph 45: The Effect of Subscription Cancellation on Promotional Content Access</b><br/>
Some subscriptions offer access to exclusive content, such as webinars, articles, or events, as part of the membership. If you cancel your subscription, you may lose access to this content immediately or at the end of the billing cycle. Be sure to understand how cancellation affects your access to any promotional or exclusive content offered through the service.</p>
{checked[43] && (
            <div>
              <input
                type="checkbox"
                checked={checked[44]}
                onChange={() => checkPassed(44)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 45)
            </div>
          )}
<p><b>Paragraph 46: The Risk of Hidden Fees Upon Cancellation</b><br/>
Certain subscriptions may charge hidden fees at the time of cancellation. These could include processing fees, cancellation fees, or costs associated with early termination. It's important to review the subscription agreement for any potential hidden charges before initiating the cancellation process to avoid surprises and ensure you are fully aware of the financial obligations involved.</p>
{checked[44] && (
            <div>
              <input
                type="checkbox"
                checked={checked[45]}
                onChange={() => checkPassed(45)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 46)
            </div>
          )}
<p><b>Paragraph 47: Subscription Cancellation and Loyalty Programs</b><br/>
Many subscription services offer loyalty programs that reward customers for continued membership. If you cancel your subscription, you may lose any accumulated points or rewards from these programs. Review the loyalty program terms to understand what happens to your rewards and whether it’s worth continuing your subscription to maintain these benefits.</p>
{checked[45] && (
            <div>
              <input
                type="checkbox"
                checked={checked[46]}
                onChange={() => checkPassed(46)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 47)
            </div>
          )}
<p><b>Paragraph 48: Subscription Cancellation via Third-Party Platforms</b><br/>
In some cases, subscriptions may be managed through third-party platforms such as app stores or payment services. Canceling through these platforms may involve different procedures or terms compared to canceling directly with the service provider. Make sure to understand the process for canceling subscriptions through third-party platforms, as they may have their own policies regarding refunds and cancellation.</p>
{checked[46] && (
            <div>
              <input
                type="checkbox"
                checked={checked[47]}
                onChange={() => checkPassed(47)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 48)
            </div>
          )}
<p><b>Paragraph 49: Ethical Considerations of Subscription Cancellation</b><br/>
Canceling a subscription may sometimes raise ethical considerations, especially if the service provides important benefits or supports charitable causes. Consider whether canceling is in line with your personal values or goals. While you are legally entitled to cancel any subscription, it’s worth weighing the ethical implications, particularly for services with significant social or environmental impacts.</p>
{checked[47] && (
            <div>
              <input
                type="checkbox"
                checked={checked[48]}
                onChange={() => checkPassed(48)}
              />
              I understand these terms and conditions and consent to take further any responsibilities of checking. (Statement 49)
            </div>
          )}
<p><b>Paragraph 50: Final Thoughts on Subscription Cancellation</b><br/>
Navigating the subscription cancellation process requires understanding the legal terms and conditions that apply to each service. By carefully reviewing the terms, keeping track of deadlines, and following the proper procedures, you can ensure that you are able to cancel your subscription without complications. Always make sure to document your cancellation and understand any consequences, such as refunds or data retention, to avoid future issues.</p>

            <input
            type="checkbox"
            checked={enabled}
            onChange={mainCheckPassed}
            /> I understand this terms and conditions and consent to take further any responsibilities of checking.
            <div className="final-text">
                {(enabled && index >48 && index > 0) ? <h1>Oh, you made it... just in time to fail. Guess timing isn’t your thing! Try again</h1> : <h1>Still some boxes left? Maybe you should’ve started earlier, huh?</h1>}
                {
                    window.location.reload()
                }
            </div>
            </div>
        </>
    );
};

export default Unsubscribe;