use strict;
use vars qw($VERSION %IRSSI);

use Irssi;
use LWP::Simple;
use URI::Escape;

$VERSION = '0.0.1';
%IRSSI = (
	authors     => 'Andrew Turley',
	contact     => 'aturley@acm.org',
	name        => 'pnnotify',
	description => 'Send a notification to a pubnub channel.',
	license     => 'GNU General Public License'
);

#--------------------------------------------------------------------
# In parts based on fnotify.pl 0.0.3 by Thorsten Leemhuis
# http://www.leemhuis.info/files/fnotify/fnotify
#
#--------------------------------------------------------------------

#--------------------------------------------------------------------
# Private message parsing
#--------------------------------------------------------------------

sub priv_msg {
	my ($server,$msg,$nick,$address,$target) = @_;
	notify($nick." " .$msg );
}

#--------------------------------------------------------------------
# Printing hilight's
#--------------------------------------------------------------------

sub hilight {
    my ($dest, $text, $stripped) = @_;
    if ($dest->{level} & MSGLEVEL_HILIGHT) {
	notify($dest->{target}. " " .$stripped );
    }
}

#--------------------------------------------------------------------
# The actual printing
#--------------------------------------------------------------------

sub notify {
	my ($text) = @_;
        my ($pubkey) = "pub-4e265c74-8aae-4222-baa1-52434f4c9734";
        my ($subkey) = "sub-d4bb5785-d0e9-11e1-8fa3-e7b568629847";
        my ($channel) = "mysuperchannel";
        get('http://pubsub.pubnub.com/publish/' .
            $pubkey .
            "/" .
            $subkey .
            "/0/" .
            $channel .
            "/0/" .
            uri_escape('"' . $text . '"'));
}

#--------------------------------------------------------------------
# Irssi::signal_add_last / Irssi::command_bind
#--------------------------------------------------------------------

Irssi::signal_add_last("message private", "priv_msg");
Irssi::signal_add_last("print text", "hilight");

#- end
